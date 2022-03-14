import React from 'react';
import "../../css/CheckoutForm/Checkout.css";
import Input from '../Input/Input';
import Zoom from "react-reveal/Zoom";

function Checkout(props) {
    const {showForm , setShowForm , submitOrder , handleChange} = props;
    return (
        <>
            {
                showForm &&
                <div className="checkout-form">
                    <span className="close-icone" onClick={() => setShowForm(false)}>&times;</span>
                    <Zoom left>
                        <form onSubmit={submitOrder}>
                            <Input 
                                label="Name"
                                type="text"
                                name="name"
                                handleChange={handleChange}
                            />
                            <Input 
                                label="Email"
                                type="email"
                                name="email"
                                handleChange={handleChange}
                            />
                            <div>
                                <button type="submit">Checkout</button>
                            </div>
                        </form>
                    </Zoom>
                </div>
            }
        </>
    );
};

export default Checkout;