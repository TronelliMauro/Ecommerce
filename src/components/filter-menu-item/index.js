import React from "react";
import './style.css'; 

const FilterMenuItem = ({name, id, onFilter}) => {
    return (
        <div className="filter-menu-item">
            <button className="button-filter-menu" id={id} onClick={() => onFilter(id)} > {name} </button>
        </div>
    )
}

export default FilterMenuItem;