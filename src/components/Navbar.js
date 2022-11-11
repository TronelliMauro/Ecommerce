import React from "react";
// import { useNavigate } from "react-router-dom"; lo saque no se porque estaba 10/11
import { Items } from "./Items";


export const Navbar = () => {

    // const navigate = useNavigate(); lo saque no se porque estaba 10/11


    return (
        <nav className= 'navbar'>

        <ul>
        <img src="https://uploads-ssl.webflow.com/5e17357afb9c03067c14c2d2/5e6ff1eb067b4307e3d481fb_edites-blanco-web-p-500.png" alt="AQUI VA UNA IMAGEN" className="Logo-Nav"></img>
        </ul>

        <ul className="conteineritems">

        <Items name='Home' url='/'/>
        <Items name='Products' url='/products'/>
        <Items name='About Us' url='/about'/>
        <Items name='Gallery' url='/gallery'/>
        <Items name='Contact' url='/contact'/>
        <Items name='Cart' url='/cart'/>

        </ul>

        <ul>
        <input className='barsearch' placeholder="type to search" type='text'></input>
        <button className='button1'> Search </button>
        </ul>


        </nav>
    )

}




