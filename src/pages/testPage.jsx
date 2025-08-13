import { useState } from "react";

export default function TestPage(){
    //let const=0;
    const[count,setCount] = useState(0);
    
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    //setCount(5)  Donot do following.The reason is explained in the session

    return(
        <div className='w-full h-screen bg-amber-200 flex justify-center items-center'>
            <div className='w-[400px] h-[400px] bg-white flex flex-col justify-center items-center'>
                <h1 className='text-5xl front-bold'>{count}</h1> 
                <div className='w-full flex justify-center items-center border h-[100px]'> 
                    <button onClick={decrement} className='w-[100px] bg-blue-500 h-[45px] text-3xl mx-2 flex justify-center items-center text-white rounded-full'>-</button>
                    <button onClick={increment} className='w-[100px] bg-blue-500 h-[45px] text-3xl mx-2 flex justify-center items-center text-white rounded-full'>+</button>

                </div>

            </div>


        </div>
    )
}
 