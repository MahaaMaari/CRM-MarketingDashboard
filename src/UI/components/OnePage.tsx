import { useState, useEffect } from "react";
import InstaDetails from "./InstaDetails";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/index.css';
export default function OnePage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/Instagram" element={<InstaDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}