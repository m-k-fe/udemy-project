import React , { useState } from 'react';
import "../../css/Cart/Cart.css";
import Checkout from '../CheckoutForm/Checkout';
import Bounce from 'react-reveal/Bounce';

function Cart(props) {
    const { cartItems , removeFromCart } = props;
    const [showForm , setShowForm] = useState(false);
    const [value , setValue] = useState("");
    const submitOrder = (e) => {
        e.preventDefault();
        const order = {
            name : value.name,
            email : value.email
        };
        console.log(order);
    };
    const handleChange = (e) => {
        setValue((prevValue) => ({...prevValue , [e.target.name] : e.target.value}));
    };
    return (
        <div className="cart-wrapper">
            <div className="cart-title">
                {
                    cartItems.length === 0 ? 
                    <p>Cart Empty</p> : 
                    <p>There Is {cartItems.length} Products In Cart</p>
                }
            </div>
            <Bounce left cascade>
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
            </Bounce>
            {
                cartItems.length !== 0 && 
                <div className="cart-footer">
                    <div className="total">
                        Total Price : ${cartItems.reduce((acc , item) => {
                            return acc + item.price * item.qty;
                        },0)}
                    </div>
                    <button onClick={() => setShowForm(true)}>Select Products</button>
                </div> 
            }
            <Checkout 
                showForm={showForm}
                setShowForm={setShowForm}
                submitOrder={submitOrder}
                handleChange={handleChange}
            />
        </div>
    );
};

export default Cart;