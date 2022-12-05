import React from "react";
import ItemCount from "./itemCount";

const CardBuy = ({ item, AddProduct }) => {
    const { title, image, price, category } = item;



    const onAdd = (quantity) => {
        AddProduct(`compraste ${quantity} unidades`);

    }


    return (
        <div className='card'>
            <div className='card-image-container'>
                <img className='card-image' src={image} alt={item.name} />
            </div>
            <div className='card-content'>
                <p className='card-name'>{title}</p>
                <p className='card-category'> Category: {category}</p>
                <p className='card-type'> Price: {price}</p>

                <ItemCount initial={1} stock={5} onAdd={onAdd} />

            </div>
        </div>
    )

};

export default CardBuy;






