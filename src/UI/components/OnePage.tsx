import { useState, useEffect } from "react";
import InstaDetails from "./InstaDetails";
import NavBar from "./NavBar";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import '../styles/index.css';
export default function OnePage() {
    return (
        <div className='flex'>
            <NavBar className='flex'/>
            <InstaDetails />
        </div>
    );
}