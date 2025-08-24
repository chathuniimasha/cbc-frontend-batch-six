/*productId
names
altNames
labelledPrice
price
images
description
stock
isAvailable
category
*/

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function AddProductPage() {
    const [productId, setProductId] = useState("")
    const [productName, setProductName] = useState("")
    const [alternativeNames, setAlternativeNames] = useState("")
    const [labelledPrice, setLabelledPrice] = useState("")
    const [price, setPrice] = useState("")
    const [images, setImages] = useState("")
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState("")
    const [isAvailable, setIsAvailable] = useState(true)
    const [category, setCategory] = useState("cream")
    const navigate = useNavigate()

    function handleSubmit(){
        const altNamesInArray = alternativeNames.split(",");
        const productData = {
            productId:productId,
            name:productName,
            altNames:altNamesInArray,
            labelledPrice:labelledPrice,
            price:price,
            images:[],
            description:description,
            stock:stock,
            isAvailable:isAvailable,
            category:category
        }
        const token = localStorage.getItem("token");
        if(token==null){
            navigate("/login");
            return;
        }

        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/products",productData,
            {
                headers:{
                    Authorization:"Bearer "+token
                }
            }
        ).then(
        (res)=>{
            console.log("Product added successfully");
            console.log(res.data);
            toast.success("Product added successfully");
            navigate("/admin/products");

        }
    ).catch(
        (error)=>{
            console.error("Error adding product:",error);
            toast.error("failed to add product");
            
        }
    )


        console.log(productData);

    }
    

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[600px] border-[3px] rounded-[15px] p-[15px] flex flex-wrap justify-between">
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Product ID</label>
                    <input type="text" value={productId} onChange={(e) => { setProductId(e.target.value) }} className="w-full border-[1px] h-[40px] rounded-md" />
                </div>
                <div className="w-[300px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Product Name</label>
                    <input type="text" value={productName} onChange={(e) => { setProductName(e.target.value) }} className="w-full border-[1px] h-[40px] rounded-md" />
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Alternative Names</label>
                    <input type="text" value={alternativeNames} onChange={(e) => { setAlternativeNames(e.target.value) }} className="w-full border-[1px] h-[40px] rounded-md" />
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Labelled Price</label>
                    <input type="number" value={labelledPrice} onChange={(e) => { setLabelledPrice(e.target.value) }} className="w-full border-[1px] h-[40px] rounded-md" />
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Price</label>
                    <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} className="w-full border-[1px] h-[40px] rounded-md" />
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Images</label>
                    <input type="text" value={images} onChange={(e) => { setImages(e.target.value) }} className="w-full border-[1px] h-[40px] rounded-md" />
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Description</label>
                    <textarea type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="w-full border-[1px] h-[40px] rounded-md"></textarea>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Stock</label>
                    <input type="number" value={stock} onChange={(e) => { setStock(e.target.value) }} className="w-full border-[1px] h-[40px] rounded-md" />
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">is Available</label>
                    <select value={isAvailable} onChange={(e) => { setIsAvailable(e.target.value === "true") }} className="w -full border-[1px] h-[40px] rounded-md">
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                    </select>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold">Category</label>
                    <select value={category} onChange={(e) => { setCategory(e.target.value) }} className="w -full border-[1px] h-[40px] rounded-md">
                        <option value="cream">Cream</option>
                        <option value="face wash">Face wash</option>
                        <option value="soap">Soap</option>
                        <option value="fragrance">Fragrance</option>
                    </select>
                </div>
                <div className="w-full flex justify-center flex-row py-[20px]">
                    <Link to={"/admin/products"} className="w-[200px] h-[50px] bg-white text-black border-[2px] rounded-md flex justify-center items-center">Cancel</Link>
                    <button onClick={handleSubmit} className="w-[200px] h-[50px] bg-black text-white border-[2px] rounded-md flex justify-center items-center ml-[20px]">Add Product</button>
                </div>
            </div>
        </div>
    )
}
