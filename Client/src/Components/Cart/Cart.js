import React from 'react';
import "../../css/Cart/Cart.css";

function Cart(props) {
    const { cartItems , removeFromCart } = props;
    return (
        <div className="cart-wrapper">
            <div className="cart-title">
                {
                    cartItems.length === 0 ? 
                    "Cart Empty" : 
                    <p>There Is {cartItems.length} Products In Cart</p>
                }
            </div>
            <div className="cart-items">
                {cartItems.map(item =>  (
                    <div className="cart-item" key={item.id}>
                        <img src={item.imageUrl} alt="" />
                        <div className="cart-info">
                            <div className="cart-info-p">
                                <p>{item.title}</p>
                                <p>Qty : {item.qty} </p>
                                <p>Price : ${item.price}</p>
                            </div>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;