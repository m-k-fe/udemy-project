import React from 'react';

function Input(props) {
    const {label , type , name , handleChange} = props;
    return (
        <div>
            <label>{label}</label>
            <input type={type} required name={name} onChange={handleChange} />
        </div>
    );
};

export default Input