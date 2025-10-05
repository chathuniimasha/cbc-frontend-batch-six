import axios from "axios";
import { useEffect, useState } from "react"
import Paginator from "../../components/paginator";
import toast from "react-hot-toast";

export default function OrdersPageAdmin(){
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(0);
    const [limit,setLimit] = useState(10);
    const [popupVisible,setPopupVisible] = useState(false);
    const [clickOrder,setClickOrder] = useState(null);
    const [orderStatus,setOrderStatus] = useState("pending");//pending,completed,cancelled
    const [orderNotes,setOrderNotes] = useState("");

    useEffect(()=>{
        if(loading){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/orders/"+page+"/"+limit,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }).then((res)=>{
                setOrders(res.data.orders);
                setTotalPages(res.data.totalPages);
                setLoading(false);
                console.log(res.data);
                

            }).catch((err)=>{
                console.error(err);
            });
        }
    },[loading,page,limit]);
    return(
        <div className="w-full h-full flex flex-col justify-between">
            <table className="w-full border-[3px]">
                <thead>
                    <tr className="border-[3px]">
                        <th className="p-[10px]">Order ID</th>
                        <th className="p-[10px]">Email</th>
                        <th className="p-[10px]">Name</th>
                        <th className="p-[10px]">Address</th>
                        <th className="p-[10px]">Phone</th>
                        <th className="p-[10px]">Status</th>
                        <th className="p-[10px]">Date</th>
                        <th className="p-[10px]">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order,index)=>{
                            return(
                            <tr key={index} className="border-b-[1px] hover:bg-blue-600 hover:text-white" onClick={()=>{
                                setOrderStatus(order.status);
                                setOrderNotes(order.notes);
                                setClickOrder(order);
                                setPopupVisible(true);
                            }}>
                                <td className="p-[10px]">{order.orderID}</td>
                                <td className="p-[10px]">{order.email}</td>
                                <td className="p-[10px]">{order.name}</td>
                                <td className="p-[10px]">{order.address}</td>
                                <td className="p-[10px]">{order.phone}</td>
                                <td className="p-[10px]">{order.status}</td>
                                <td className="p-[10px]">{new Date(order.date).toLocaleDateString()}</td>
                                <td className="p-[10px] text-end">{order.total.toLocaleString('en-US',{minimumFractionDigits: 2,maximumFractionDigits: 2})}</td>
                            </tr>
                            )

                        })
                    }
                </tbody>
            </table>
            {
  popupVisible && clickOrder &&(
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000070] flex justify-center items-center z-50">
      <div className="w-[600px] max-h-[600px] bg-white rounded-2xl shadow-lg relative p-6">
        {(orderStatus!=clickOrder.status || orderNotes!=clickOrder.notes)&&<button className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-lg" onClick={async()=>{
            setPopupVisible(false);
            try{
                await axios.put(
                    import.meta.env.VITE_BACKEND_URL+"/api/orders/"+clickOrder.orderID,
                    {
                        status: orderStatus,
                        notes: orderNotes
                    },
                    {
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                toast.success("Order updated successfully");
                setLoading(true);
            }catch(err){
                console.error(err);
                toast.error("Failed to update order");
            }
        }}>
            Save Changes
        </button>}
        {/* Close Button */}
        <button
          className="absolute top-[-25px] right-[-25px] w-8 h-8 bg-red-600 text-white rounded-full border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition"
          onClick={() => setPopupVisible(false)}
        >
          ✕
        </button>

        {/* Order Header */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Order Details
        </h2>

        {/* Order Info Section */}
        <div className="space-y-2 mb-6">
          <p><span className="font-semibold">Order ID:</span> {clickOrder.orderID}</p>
          <p><span className="font-semibold">Customer Name:</span> {clickOrder.name}</p>
          <p><span className="font-semibold">Email:</span> {clickOrder.email}</p>
          <p><span className="font-semibold">Address:</span> {clickOrder.address}</p>
           {/* Total Section */}
           <p><span className="font-semibold">Total:</span>{" "} 
           {clickOrder.total?.toLocaleString('en-US',{minimumFractionDigits: 2,maximumFractionDigits: 2})}
          </p>
       
          <p><span className="font-semibold">Phone:</span> {clickOrder.phone}</p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded-full text-sm ${
                clickOrder.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : clickOrder.status === "completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {clickOrder.status}
            </span>
            <select className="ml-4 p-1 border rounded" value={orderStatus} onChange={(e)=>setOrderStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
            </select>
          </p>
          <p><span className="font-semibold">Notes:</span> {clickOrder.notes || "—"}</p>
          <textarea className="w-full h-[50px] p-2 border rounded mt-2" value={orderNotes} onChange={(e)=> setOrderNotes(e.target.value)}></textarea>
          <p><span className="font-semibold">Date:</span> {new Date(clickOrder.date).toLocaleString()}</p>
          
          
        </div>

        {/* Items Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">Items</h3>
          <div className="space-y-3 max-h-[100px] overflow-y-auto">
            {clickOrder.items?.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">Rs. {item.price.toLocaleString('en-US',{minimumFractionDigits: 2,maximumFractionDigits: 2})}</p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  )
}

            <Paginator currentPage={page} totalPages={totalPages} setCurrentPage={setPage} limit={limit} setLimit={setLimit} setLoading={setLoading}/>
        </div>
    )
}