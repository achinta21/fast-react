import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart}=props
    let total=0;
    for(const prodect of cart)
    total=total+(prodect.price)
    return (
        <div className="cart-item">
            <h2>Order summary</h2>
            <h4>count: {props.cart.length}</h4>
            <h4>total: {total}</h4>
            <button className="btn">buy now</button>
        </div>
    );
};

export default Cart;