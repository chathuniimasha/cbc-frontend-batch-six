import { useState } from "react";
import toast from "react-hot-toast";
import uploadFile from "../utils/mediaUpload";


export default function TestPage(){

    const [file,setFile] = useState(null);

    function handleUpload(){
        uploadFile(file).then(
            (url)=>{
                console.log(url);
                toast.success("File uploaded successfully");

            }
        ).catch(
            (error)=>{
                console.error("Error uploading file:",error);
                toast.error(error);

            }
        )
    }
    

    return(
        <div className='w-full h-screen flex justify-center items-center'>
            <input type="file" 
            //accept="image/"
            onChange={
                (e)=>{
                    
                    setFile(e.target.files[0]);
                }
            } />
            <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                upload
            </button>

        </div>


    
    )
}
 