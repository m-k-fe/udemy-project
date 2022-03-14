import React from 'react';
import "../../css/CheckoutForm/Checkout.css";
import Input from '../Input/Input';

function Checkout(props) {
    const {showForm , setShowForm , submitOrder , handleChange} = props;
    return (
        <>
            {
                showForm &&
                <div className="checkout-form">
                    <span className="close-icone" onClick={() => setShowForm(false)}>&times;</span>
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
                </div>
            }
        </>
    );
};

export default Checkout;