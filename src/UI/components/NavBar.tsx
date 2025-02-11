import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
    const navigate = useNavigate();
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }
    const onClickInsta = () => {
        navigate("/Instagram");
    }
    return (
        <div className={`${isSideBarOpen ? 'w-64' : 'w-16'} bg-gray-400 text-white transition-all duration-300 ease-in-out`}>
            <div className="flex items-center justify-between p-4">
                <button onClick={toggleSideBar} className="focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>
            <nav className="mt-4">
                <ul>
                    <li className="p-2 hover:bg-gray-700 active:bg-black">
                        <a href="./" className="flex items-center">
                            <img src="../assets/Home.png" className={`${isSideBarOpen ? 'w-6 h-6' : 'w-8 h-6'} bg-gray`}></img>
                            <span className={`${isSideBarOpen ? 'ml-2' : 'hidden'}`}>Home</span>
                        </a>
                    </li>
                    <li className="p-2 hover:bg-gray-700 active:bg-black">
                        <button onClick={onClickInsta} type="button" className="w-full flex items-center hover:cursor-pointer">
                            <img src="../assets/InstaLogo.png" className={`${isSideBarOpen ? 'w-6 h-6' : 'w-8 h-6'}`}></img>
                            <span className={`${isSideBarOpen ? 'ml-2' : 'hidden'}`}>Instagram</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}