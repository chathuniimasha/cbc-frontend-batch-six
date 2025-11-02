import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

 
export default function RegisterPage(){
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
  

    function register(){

        if (!firstName || !lastName || !email || !password) {
        toast.error("All fields are required");
        return;
    }
        
        axios.post(import.meta.env.VITE_BACKEND_URL +"/api/users/",{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        }).then(
            (response)=>{
               
                toast.success("Register Successful!");
                navigate("/login");

            
            }
        ).catch(
            (error)=>{
                console.log(error)
                
                toast.error("Register Failed")
            }
        )
    }
    
    
    return(
        <div className="w-full h-screen bg-[url(/home3.jpg)] bg-cover bg-center flex justify-center items-center">
            <div className="w-[500px] h-[500px] backdrop-blur-sm shadow-2xl rounded-[30px] relative gap-[20px] text-accent flex flex-col items-center justify-center">
                <h1 className="absolute top-[5px] text-2xl font-bold text-center my-5">Register</h1>

                <div className="w-[350px] flex flex-col">
                        <span className="text-lg font-semibold">First Name</span>
                        <input onChange={
                            (e)=>{
                                setFirstName(e.target.value)

                        }
                    } type="text" className="w-[350px] h-[40px] border border-accent
                         rounded-xl"/>
                    </div>
                    <div className="w-[350px] flex flex-col">
                        <span className="text-lg font-semibold">Last Name</span>
                        <input onChange={
                            (e)=>{
                                setLastName(e.target.value)

                        }
                    } type="text" className="w-[350px] h-[40px] border border-accent
                         rounded-xl"/>
                    </div>

                    <div className="w-[350px] flex flex-col">
                        <span className="text-lg font-semibold">Email</span>
                        <input onChange={
                            (e)=>{
                                setEmail(e.target.value)

                        }
                    } type="text" className="w-[350px] h-[40px] border border-accent
                         rounded-xl"/>
                    </div>
                    <div className="w-[350px] flex flex-col">
                        <span className="text-lg font-semibold">Password</span>
                        <input onChange={
                            (e)=>{
                                setPassword(e.target.value)
                               
                            }
                        } type="password" className="w-[350px] h-[40px] border border-accent
                         rounded-xl"/>
                    </div>

                    <button  onClick={register} className="w-[350px] h-[40px] bg-accent rounded-xl text-white text-lg mt-5 hover:bg-gray-800 transition all duration-300">
                        Register
                    </button>
                    

                    
                
                

            </div>
            

        </div>
    )
}
