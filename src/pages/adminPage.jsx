import { Link, Route, Routes } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import ProductAdminPage from "./admin/productsAdminPage";
import AddProductPage from "./admin/addProductAdminPage";
import UpdateProductPage from "./admin/updateProduct";
import OrdersPageAdmin from "./admin/orderPageAdmin";

export default function AdminPage(){
    return(
        <div className='w-full h-screen flex'>
            <div className='w-[300px] h-full flex flex-col items-center '>
                <span className='text-3xl font-bold my-5'>Admin Panel</span>

                <Link className='flex flex-row h-[60px] w-full items-center p-[20px] text-xl gap-[25px]' to='/admin/products'> <MdOutlineProductionQuantityLimits />
Products</Link>
                <Link className='flex flex-row h-[60px] w-full items-center p-[20px] text-xl gap-[25px]' to='/admin/orders'> <FaShoppingBag />
Orders</Link>
                <Link className='flex flex-row h-[60px] w-full items-center p-[20px] text-xl gap-[25px]' to='/admin/users'><IoPeople />Users</Link>
                <Link className='flex flex-row h-[60px] w-full items-center p-[20px] text-xl gap-[25px]' to='/admin/settings'><IoIosSettings />Settings</Link>

            </div>
            <div className='w-[calc(100%-300px)] h-full'>
               <Routes path='/'>
               <Route path='/' element={<h1>Dashboard</h1>}/>
               <Route path='/products' element={<ProductAdminPage/>}/>
               <Route path='/newProduct' element={<AddProductPage/>}/>
               <Route path='/orders' element={<OrdersPageAdmin/>}/>
               <Route path='/updateProduct' element={<UpdateProductPage/>}/>
               </Routes>

            </div>
        </div>
    )
}