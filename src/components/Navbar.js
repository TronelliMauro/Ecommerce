import React from "react";
import { Items } from "./Items";

export const Navbar = () => {
    return (
        <nav className= 'navbar'>  
        
        <ul>
        <img src="https://uploads-ssl.webflow.com/5e17357afb9c03067c14c2d2/5e6ff1eb067b4307e3d481fb_edites-blanco-web-p-500.png" alt="AQUI VA UNA IMAGEN" className="Logo-Nav"></img>
        </ul>

        <ul className="conteineritems">
        <Items name='Home'/>
        <Items name='Products'/>
        <Items name='About Us'/>
        <Items name='Gallery'/>
        <Items name='Contact'/>
        </ul>

        <ul>
        <input className='barsearch' placeholder="type to search" type='text'></input>
        <button className='button1'> Search </button>
        </ul>
               
        
        </nav>
    )

}




