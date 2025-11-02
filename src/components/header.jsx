import { BiCart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";



export default function Header(){
    const navigate = useNavigate();
    const [isOpen,setIsOpen] = useState(false);
    const token = localStorage.getItem("token");
    return(
        <header className="h-[100px] bg-accent flex justify-center items-center relative">
            {isOpen &&
                <div className="fixed z-[100] w-[100vw] h-[100vh] top-0 right-0 bg-[#00000050]">
                    <div className="h-full w-[350px] bg-white flex flex-col">
                        <div className="w-full bg-accent h-[100px] flex pl-[45px] flex-row items-center gap-[20px]">
                            <GiHamburgerMenu className="text-white text-4xl md:hidden " onClick={()=>{
                                setIsOpen(false);
                            }}/>
                            <img  className="w-[150px] h-100px] object-cover cursor-pointer" src="/logs.png" alt="logo" onClick={()=>{
                                navigate("/");
                            }} />
                        </div>

                        <div className="w-full h-full flex flex-col p-[45px] items-start">
                            {/*home*/}
                            <button className="text-accent text-2xl flex flex-row items-center" onClick={()=>{
                                setIsOpen(false);
                                navigate("/");
                            }}>
                                <HiHome className="text-accent text-2xl mr-2"/>
                                Home
                                </button>
                                {/*products*/}
                                <button className="text-accent text-2xl flex flex-row items-center" onClick={()=>{
                                setIsOpen(false);
                                navigate("/products");
                            }}>
                                <BiStore className="text-accent text-2xl mr-2"/>
                                Products
                                </button>
                                {/*cart*/}
                            <button className="text-accent text-2xl flex flex-row items-center" onClick={()=>{
                                setIsOpen(false);
                                navigate("/cart");
                            }}>
                                <BiCart className="text-accent text-2xl mr-2"/>
                                Cart
                                </button>
                        </div>
                    </div>
                </div>
            }
            <img  className="w-[150px] h-[100px] object-cover absolute md:left-[40px] cursor-pointer" src="/logs.png" alt="logo" onClick={()=>{
                navigate("/");
            }} />
            <GiHamburgerMenu className="text-white text-4xl absolute md:hidden left-[40px]" onClick={()=>{
                setIsOpen(true);
            }}/>
            <div className=" hidden w-full md:flex justify-center items-center">
            <Link to="/" className="ml-4 text-white text-xl">
            Home
            </Link>
            <Link to="/products" className="ml-4 text-white text-xl">
            Products
            </Link>
            <Link to="/reviews" className="ml-4 text-white text-xl">
            Reviews
            </Link>
            <Link to="/about-us" className="ml-4 text-white text-xl">
            About Us
            </Link>
            <Link to="/contact-us" className="ml-4 text-white text-xl">
            Contact Us
            </Link>
            <Link to="/cart" className="absolute right-[250px]">
            <BiCart className="text-white text-3xl ml-4"/>
            </Link>
            
            
            
            
            </div>
            
            {
                token ? (
                <button className="absolute text-white text-xl flex flex-row mr-2 justify-center right-5 md:ml-4 md:right-[80px]" 
                    onClick={
                    ()=>{
                        localStorage.removeItem("token");
                        navigate("/login");
                    }
                }>
                    Logout
                </button>
                ):(
                    <>
                <button className="absolute text-white text-[16px] md:text-xl flex flex-row mr-1 justify-center right-1 md:ml-4 md:right-[120px]"
                    onClick={
                        () => 
                        navigate("/login")
                }>
                    Login
                </button>
                
                <button className="absolute text-white text-[16px] md:text-xl flex flex-row mr-1 justify-center right-17 md:ml-6 md:right-[20px]"
                    onClick={
                        () => 
                        navigate("/register")}>
                            Register
                        </button>

                </>
                
               
                )
            }
        </header>
    )
}