import {useState} from 'react';
export default function NavBar(){
    return(
        <div className='flex'>
            <nav className='flex'>
                <button><a href="/">Home Page</a></button>
            </nav>
            <nav className='flex'>
                <button>Login to Instagram</button>
            </nav>
        </div>
    )
}