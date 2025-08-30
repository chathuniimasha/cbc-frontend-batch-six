const url="https://zrckpxjljkgjkcfnfxtf.supabase.co"; 
const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyY2tweGpsamtnamtjZm5meHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMzYyMjQsImV4cCI6MjA3MTYxMjIyNH0.uzUnhnO8D-JRZOWVtWZkD4Qx4HJZiVYZuuPuqdiq3l0";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(url,key);

export default function uploadFile(file){
    const promise = new Promise(
        (resolve,reject)=>{

            if(file==null){
                reject("Please select a file to upload");
                return;
            }
            const timeStamp = new Date().getTime();
            const fileName = timeStamp+"-"+file.name;

            supabase.storage.from("images").upload(fileName,file,{
                cacheControl:"3600",
                upset:false
            }).then(
                ()=>{
                    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                    resolve(publicUrl);
                }
            ).catch(
                ()=>{
                    
                    reject("Failed to upload file");

                }
            )
        }
    )
        return promise;
    

}