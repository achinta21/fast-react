import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Prodects from '../Prodects/Prodects';
import './Shops.css'

const Shops = () => {
    const [prodects,setProdects]=useState([])
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProdects(data))
    },[])
    const evenHander=(prodect)=>{
        const newCart=[...cart,prodect]
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="prodects-item">
                {
                prodects.map(prodect=><Prodects key={prodect.key} prodect={prodect} evenHander={evenHander}></Prodects>)
                }
            </div>
            <div className="card-item">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;