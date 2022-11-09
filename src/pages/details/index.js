import React from "react";
import { useParams, useLocation } from "react-router-dom";
import './styles.css'; 
import Card from "../../components/card";

const Details = () =>{
    const params = useParams();
    const {state} = useLocation();

    console.warn('params', params, 'state', state);
return(
    <div>
        Details
        {/* <Card item={state}/> */}
    </div>
)

}

export default Details;