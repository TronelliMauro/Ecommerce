import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./itemCount";
import { redirect } from "react-router-dom";


 const CardBuy = ({item, AddProduct}) => {
     const {title,image,price,category}=item;

const navigate = useNavigate();
const handleBuy=() =>{
         /*navigate(`cart`);*/
         redirect("cart");

       }

const onAdd=(quantity) => {
            AddProduct(`compraste ${quantity} unidades`);
            handleBuy();
    }

    

 
     return(
     <div  className='card'>
         <div className='card-image-container'>
             <img className='card-image' src={image} alt={item.name} />
         </div>
         <div className='card-content'>
             <p className='card-name'>{title}</p>
             <p className='card-category'> Category: {category}</p>
            <p className='card-type'> Price: {price}</p>
            <h1 className='card-buy'>Press to Buy</h1>

            <ItemCount initial={1} stock={5} onAdd={onAdd}/>

         </div>
     </div>
     )

 };

 export default CardBuy;






 