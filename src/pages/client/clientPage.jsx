import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import ProductsPage from "./ProductsPage";
import ProductOverViewPage from "./productOverView";
import CartPage from "./cart";

import CheckoutPage from "./checkoutPage";
import HomePage from "../homePage";
import AboutPage from "../aboutPage";
import ContactPage from "../contactPage";
import ReviewsPage from "../reviewPage";

export default function ClientWebPage(){
    return(
        <div className="w-full h-screen max-h-screen">
            <Header/>
            <div className="w-full h-[calc(100%-100px)]">
                <Routes path="/">
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<ProductsPage/>}/>
                <Route path="/reviews" element={<ReviewsPage/>}/>
                <Route path="/about-us" element={<AboutPage/>}/>
                <Route path="/contact-us" element={<ContactPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/overview/:productId" element={<ProductOverViewPage/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
                <Route path="/*" element={<h1 className="text-3px text-center">404 Not Found</h1>}/>

                </Routes>
            </div>
        </div>
    )
}
