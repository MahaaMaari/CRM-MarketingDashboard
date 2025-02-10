import {useState,useEffect} from 'react';
export default function GetDetails(){
    const [details,setDetails]=useState({});
    let onClick=async ()=>{
        let data=await (await fetch("/apis/accessToken")).json();
        setDetails(data);
    }
    return(
        <div>
            <button onClick={onClick}>Get Details</button>
            <p>{details.id}</p>
        </div>
    )
}