 import React from "react";
 import { useNavigate } from "react-router-dom";
 import './styles.css';


 const Card = ({item}) => {
     const {id,title,image,price,category}=item;

 const navigate = useNavigate();
 const handleDetail=() =>{
     navigate(`/details/${id}`, {state: item});


 }

     return(
     <div onClick={handleDetail} className='card'>
         <div className='card-image-container'>
             <img className='card-image' src={image} alt={item.name} />
         </div>
         <div className='card-content'>
             <p className='card-name'>{title}</p>
             <p className='card-category'> Category: {category}</p>
            <p className='card-type'> Price: {price}</p>
            <h1 className='card-buy'>Press to Details</h1>

         </div>
     </div>
     )

 };

 export default Card;





