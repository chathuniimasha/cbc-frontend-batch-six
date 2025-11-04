import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt, FaTiktok } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiLogIn, FiSend } from "react-icons/fi";



export default function ContactPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);        // ← logged-in user
  const [form, setForm] = useState({ subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Try to decode token → set user if valid
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return; // ← no token = not logged in → don't redirect

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser(payload);
    } catch {
      localStorage.removeItem("token");
      toast.error("Session expired. Please log in again.");
      // Don't redirect — let them see the page
    }
  }, []);

  const handleSubmit = () => {
    if (!user) {
      toast.error("You must be logged in to send a message");
      return;
    }

    if (!form.subject.trim()) return toast.error("Subject required");
    if (form.message.length < 10) return toast.error("Message too short");

    setLoading(true);
    axios.post(
  import.meta.env.VITE_BACKEND_URL + "/api/users/contacts",
        { name:user.name,
          email: user.email,
          subject: form.subject,
          message: form.message,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        toast.success("Message sent!");
        setForm({ subject: "", message: "" });
      })
      .catch((err) => {
        toast.error("Failed to send");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact Info</h2>
          <div className="space-y-5">
            <div className="flex gap-3">
              <MdEmail className="text-accent text-2xl" />
              <div><p className="font-semibold text-xl">Email</p><p>hello@yourcosmetics.com</p></div>
            </div>
            <div className="flex gap-3">
              <IoCall className="text-accent text-2xl" />
              <div><p className="font-semibold text-xl">Phone</p><p>+1 (555) 123-4567</p></div>
            </div>
            <div className="flex gap-3">
              <FaMapMarkerAlt className="text-accent text-2xl" />
              <div><p className="font-semibold text-xl">Address</p><p>123 Beauty St, LA</p></div>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="#" className="text-accent hover:text-gray-800"><PiInstagramLogoFill className="text-2xl" /></a>
            <a href="#" className="text-accent hover:text-gray-800"><FaFacebook className="text-2xl" /></a>
            <a href="#" className="text-accent hover:text-gray-800"><FaTwitter className="text-2xl" /></a>
            <a href="#" className="text-accent hover:text-gray-800"><FaTiktok className="text-2xl" /></a>
            
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

          {/* Show login prompt if not logged in */}
          {!user && (
            <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 flex items-center gap-2">
              <FiLogIn />
              <p>
                <Link to="/login" className="underline font-medium">Log in</Link> to send a message
              </p>
            </div>
          )}

          <form
            onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
            className="space-y-4"
          >
            {/* Name & Email: Show only if logged in */}
            {user && (
              <>
                <input
                  value={`${user.firstName} ${user.lastName}`}
                  readOnly
                  className="w-full px-4 py-3 border rounded-lg bg-gray-100"
                />
                <input
                  value={user.email}
                  readOnly
                  className="w-full px-4 py-3 border rounded-lg bg-gray-100"
                />
              </>
            )}

            {/* Subject */}
            <input
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent outline-none"
              disabled={!user}
            />

            {/* Message */}
            <textarea
              placeholder="Your message (min 10 characters)"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent outline-none resize-none"
              disabled={!user}
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={loading || !user}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition
                ${user 
                  ? "bg-accent text-white hover:bg-gray-800" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              {loading ? "Sending..." : <> <FiSend /> Send Message </>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}