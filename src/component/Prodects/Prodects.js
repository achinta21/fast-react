import React from 'react';
import './Prodects.css'

const Prodects = (props) => {
    const{img,name,category,price,stock}=props.prodect;
    return (
        <div className="prodects">
            <div className="prodect-logo">
            <img src={img} alt="" />
            </div>
            <div>
            <h3 id="bule">{name}</h3>
            <p>by: {category}</p>
            <p>${price}</p>
            <p>only {stock} left in stock - order soon</p>
            <button onClick={()=> props.evenHander(props.prodect)} className="btn">add to cart</button>
            </div>
        </div>
    );
};

export default Prodects;