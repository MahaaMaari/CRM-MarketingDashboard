import { useState, useEffect } from "react";
import GetDetails from "./InstaDetails";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
export default function OnePage() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/details">Details</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/details" element={<GetDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}