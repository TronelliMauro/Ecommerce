import React  from "react";
import './styles.css';


const Card = ({ product, decreaseQuantity, increaseQuantity, numberOfItem }) => {
    const { name, category, id, image, price, stock } = product || {};




    return (
        <div className='card'>
            <div className='card-image-container'>
                <img className='card-image' src={image} alt={product.name} />
            </div>
            <div className='card-content'>
                <p className='card-name'>{name}</p>
                <p className='card-category'> {category}</p>
                <p className='card-stock'>{stock} in stock</p>
                <p className='card-type'> $ {price}</p>

            </div>
            <div className="card-button-container">
                <button disabled={numberOfItem === 0} className="card-button-minus" onClick={() => decreaseQuantity(id)}>-</button>
                <input disabled className="card-input" type="number" value={numberOfItem}></input>
                <button disabled={numberOfItem === stock} className="card-button-plus" onClick={() => increaseQuantity(id)}>+</button>
            </div>

        </div>
    )

}


export default Card;





