import { Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className='w-full h-screen bg-red-700 flex'>
            <div className='w-[300px] h-full bg-white'>

            </div>
            <div className='w-[calc(100%-300px)] bg-blue-900 h-full'>
               <Routes path='/'>
               <Route path='/' element={<h1>Dashboard</h1>}/>
               <Route path='/products' element={<h1>Products</h1>}/>
               <Route path='/orders' element={<h1>Orders</h1>}/>
               </Routes>

            </div>
        </div>
    )
}