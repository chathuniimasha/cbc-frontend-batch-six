import axios from "axios";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { data, Link, useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";

const sampleProducts = [
     {
    productId: "P001",
    name: "Hydrating Face Cream",
    altNames: ["Moisturizer", "Daily Cream"],
    labelledPrice: 2500,
    price: 1999,
    images: ["/images/face-cream.jpg"],
    description: "A lightweight hydrating face cream enriched with hyaluronic acid to keep your skin soft and moisturized all day.",
    stock: 120,
    isAvailable: true,
    category: "cosmetics",
  },
  {
    productId: "P002",
    name: "Matte Liquid Lipstick",
    altNames: ["Lip Paint", "Long-wear Lipstick"],
    labelledPrice: 1500,
    price: 1299,
    images: ["/images/liquid-lipstick.jpg"],
    description: "Long-lasting matte liquid lipstick with a smooth application and vibrant color payoff.",
    stock: 80,
    isAvailable: true,
    category: "cosmetics",
  },
  {
    productId: "P003",
    name: "Volumizing Mascara",
    altNames: ["Lash Enhancer", "Eye Mascara"],
    labelledPrice: 1800,
    price: 1499,
    images: ["/images/mascara.jpg"],
    description: "Waterproof mascara that adds instant volume and length to your lashes without clumping.",
    stock: 95,
    isAvailable: true,
    category: "cosmetics",
  },
  {
    productId: "P004",
    name: "Glow Highlighter Palette",
    altNames: ["Face Shimmer", "Illuminator"],
    labelledPrice: 2200,
    price: 1799,
    images: ["/images/highlighter.jpg"],
    description: "A palette of four radiant shades to highlight your cheekbones, nose, and brow bone with a natural glow.",
    stock: 60,
    isAvailable: true,
    category: "cosmetics",
  },
  {
    productId: "P005",
    name: "Herbal Face Wash",
    altNames: ["Cleansing Gel", "Herbal Cleanser"],
    labelledPrice: 1200,
    price: 999,
    images: ["/images/face-wash.jpg"],
    description: "Gentle herbal face wash formulated with neem and aloe vera to remove impurities and refresh skin.",
    stock: 150,
    isAvailable: true,
    category: "cosmetics",
  },
  {
    productId: "P006",
    name: "Nail Polish Set",
    altNames: ["Nail Paints", "Manicure Colors"],
    labelledPrice: 1800,
    price: 1499,
    images: ["/images/nail-polish.jpg"],
    description: "A set of 6 trendy nail polish shades with long-lasting glossy finish.",
    stock: 70,
    isAvailable: true,
    category: "cosmetics",
  }
];

export default function ProductAdminPage(){
  const [products,setProducts]=useState(sampleProducts)
  const [a,setA]=useState(0)
  useEffect(
    ()=>{
    axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then(
      (res)=>{
        setProducts(res.data)
      }
    )
  },
  [a]
)
const navigate = useNavigate()

    return(
        <div className="w-full h-full border-[3px]">
          <table>
            <thead>
              <tr>
                <th className="p-[10px]">Image</th>
                <th className="p-[10px]">Product ID</th>
                <th className="p-[10px]">Name</th>
                <th className="p-[10px]">Price</th>
                <th className="p-[10px]">Labelled Price</th>
                <th className="p-[10px]">Category</th>
                <th className="p-[10px]">Stock</th>
              </tr>
            </thead>
            <tbody>
             {
              products.map(
                (product,index)=>{
                  return(
                    <tr key={index}>
                      <td>
                        <img src={product.images[0]} alt={product.name} className="w-[50px] h-[50px]"/>
                      </td>
                      <td className="p-[10px]">{product.productId}</td>
                      <td className="p-[10px]">{product.name}</td>
                      <td className="p-[10px]">{product.price}</td>
                      <td className="p-[10px]">{product.labelledPrice}</td>
                      <td className="p-[10px]">{product.category}</td>
                      <td className="p-[10px]">{product.stock}</td>
                      <td className="p-[10px]">
                        <BiTrash className="bg-red-500 p-[7px] text-3xl rounded-full text-white shadow-2xl shadow-red-500 cursor-pointer" onClick={
                          ()=>{
                            const token = localStorage.getItem("token");
                            if(token==null){
                              navigate("/login");
                              return;
                            }
                            axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/products/"+product.productId,
                              {
                                headers:{
                                  Authorization: "Bearer "+token
                                }
                              }
                            ).then(
                              (res)=>{
                                console.log("Product deleted successfully");
                                console.log(res.data);
                                toast.success("Product deleted successfully")
                                setA(a+1);
                              }
                            ).catch(
                              (error)=>{
                                console.error("Error deleting product:",error);
                                toast.error("Failed to delete product")
                              }
                            )
                          }
                        }/>

                      </td>
                    </tr>
                  )
                }
              )
             }
            </tbody>
          </table>
          
           <Link to={"/admin/newProduct"} className="fixed right-[60px] bottom-[60px] p-[20px] text-white bg-black rounded-full shadow-2xl">
            <BiPlus className="text-3xl"/>

            </Link> 
        </div>
    )
}