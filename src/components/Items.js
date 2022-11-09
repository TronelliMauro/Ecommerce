import React from "react";
import { useNavigate } from "react-router-dom";



export const Items = ({name, url}) => {

const navigate = useNavigate();
    
const goPage=() =>{
    navigate(url);
}

return (

       <div onClick={goPage} className= 'items'> {name}  </div>
    )

}


