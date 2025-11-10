import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FiStar, FiSend } from "react-icons/fi";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ rating: 0, comment: "", product: "", orderID: "" });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser(payload);
      } catch {
        localStorage.removeItem("token");
      }
    }
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/api/users/getReviews"
      );
      setReviews(data.reviews);
    } catch {
      toast.error("Failed to load reviews");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("Login required");
    if (form.rating === 0) return toast.error("Select rating");
    if (!form.comment.trim()) return toast.error("Write a comment");
    if (!form.product.trim()) return toast.error("Enter product name");
    if (!form.orderID.trim()) return toast.error("Enter your order ID");

    setLoading(true);
    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/users/createReview",
        form,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      toast.success("Review submitted!");
      setForm({ rating: 0, comment: "", product: "", orderID: "" });
      fetchReviews();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  const StarRating = ({ rating, onChange }) => {
    const handleClick = (star) => {
      onChange(form.rating === star ? star - 1 : star);
    };

    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            size={32}
            className={`cursor-pointer transition-all ${
              star <= rating
                ? "text-yellow-400 fill-current scale-110"
                : "text-gray-300 hover:text-yellow-300"
            }`}
            onClick={() => handleClick(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Customer Reviews</h1>

        {/* FORM */}
        {user && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-10">
            <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>

            <input
              placeholder="Your Order ID (e.g., ORD123)"
              value={form.orderID}
              onChange={(e) => setForm({ ...form, orderID: e.target.value })}
              className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none"
            />

           
            <input
              placeholder="Product Name"
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none"
            />

            <textarea
              placeholder="Your review (min 10 chars)"
              rows={4}
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              className="w-full mb-3 px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-accent outline-none"
            />

            <div className="mb-4">
              <p className="mb-2 font-medium">Rating:</p>
              <StarRating rating={form.rating} onChange={(r) => setForm({ ...form, rating: r })} />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition
                ${loading ? "bg-gray-400" : "bg-accent hover:bg-gray-800"} text-white`}
            >
              {loading ? "Submitting..." : <> <FiSend /> Submit Review </>}
            </button>
          </form>
        )}

        {/* LIST */}
        <div className="bg-white rounded-lg shadow p-6 max-h-96 overflow-y-auto">
          {reviews.length === 0 ? (
            <p className="text-center text-gray-500">No reviews yet.</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((r) => (
                <div key={r._id} className="border-b pb-4 last:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{r.name}</h3>
                      <p className="text-sm text-gray-500">Order: {r.orderID}</p>
                      <p className="text-sm text-gray-500">{r.product}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          size={18}
                          className={i < r.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{r.comment}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}