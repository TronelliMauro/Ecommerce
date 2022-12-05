import React from "react";
import { useParams, useLocation } from "react-router-dom";
import './styles.css';
import CardBuy from "../../components/CardBuy";



const Details = ({ AddProduct }) => {
    const params = useParams();
    const { state } = useLocation();

    console.warn('params', params, 'state', state);

    return (
        <div>
            <CardBuy AddProduct={AddProduct} item={state} />
        </div>
    )

}

export default Details;