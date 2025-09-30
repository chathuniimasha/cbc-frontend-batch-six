import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import ProductsPage from "./ProductsPage";
import ProductOverViewPage from "./productOverView";
import CartPage from "./cart";

import CheckoutPage from "./checkoutPage";

export default function ClientWebPage(){
    return(
        <div className="w-full h-screen max-h-screen">
            <Header/>
            <div className="w-full h-[calc(100%-100px)]">
                <Routes path="/">
                <Route path="/" element={<h1 className="text-3px text-center">Welcome to the Home page</h1>}/>
                <Route path="/products" element={<ProductsPage/>}/>
                <Route path="/reviews" element={<h1 className="text-3px text-center">Review page</h1>}/>
                <Route path="/about-us" element={<h1 className="text-3px text-center">About Us page</h1>}/>
                <Route path="/contact-us" element={<h1 className="text-3px text-center">Contact Us page</h1>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/overview/:productId" element={<ProductOverViewPage/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
                <Route path="/*" element={<h1 className="text-3px text-center">404 Not Found</h1>}/>

                </Routes>
            </div>
        </div>
    )
}