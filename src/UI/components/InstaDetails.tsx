import {useState,useEffect} from 'react';
import Instagram from '../controllers/Instagram';
export default function GetDetails(){
    const[instaDetails,setInstaDetails]=useState({});
    const controller=new Instagram();
    return(
        <div className="flex w-screen justify-center items-center">
            
        </div>
    )
}