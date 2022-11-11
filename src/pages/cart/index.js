import React from "react";
import './style.css';

const Cart = ({buy}) => {
    return (
        <div className="Cart">
            <h1>Bienvenidos al carrito</h1>
             {buy}
        </div>
    )
}


export default Cart;