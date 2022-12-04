import React,{memo} from "react";
 import { useNavigate } from "react-router-dom";
 import './styles.css';


 const Card =  ({product,decreaseQuantity,increaseQuantity,numberOfItem}) => {
     const {name,category, id, image,description,price, stock}= product || {};

//  const navigate = useNavigate();
//  const handleDetail=() =>{
//      navigate(`/details/${id}`, {state: item});


     return(
     <div className='card'>
         <div className='card-image-container'>
             <img className='card-image' src={image} alt={product.name} />
         </div>
         <div className='card-content'>
             <p className='card-name'>{name}</p>
             <p className='card-category'> {category}</p>
             <p className='card-stock'>{stock} in stock</p>
            <p className='card-type'> $ {price}</p>
            {/* <h1 className='card-buy'>Press to Details</h1> */}
         </div>
         <div className="card-button-container">
            <button disabled={numberOfItem===0} className="card-button-minus" onClick={()=>decreaseQuantity(id)}>-</button>
            <input disabled className="card-input" type="number" value={numberOfItem}></input>
            <button disabled={numberOfItem==stock} className="card-button-plus" onClick={()=>increaseQuantity(id)}>+</button>
        </div>
        {/* <button className="add-cart-button">Add to cart</button> */}
     </div>
     )

 }

//  }, (prevProps, nextProps)=>{
//     return prevProps.isFiltering === nextProps.isFiltering;
//  } ); 

export default Card;





