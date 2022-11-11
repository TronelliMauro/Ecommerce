import './itemCount.css';
//import React, { useEffect } from 'react';
import { useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount]= useState(initial);
    
    const decrese = () =>{
        setCount(count-1);
    }

    const increse = () =>{
        setCount(count+1);
    }

   

    return(
         <div className='counter'>
            <button disabled={count<=1} onClick={decrese}> - </button> 
            <span> {count} </span>
            <button disabled={count>=stock} onClick={increse}> + </button> {/*poner una variable en stock */}
            <div> 
             <button disabled={stock<=0} onClick={() => onAdd(count)} >Add to Cart</button>
            </div>
        
        </div>
    );

    }

export default ItemCount;
