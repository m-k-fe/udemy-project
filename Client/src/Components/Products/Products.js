import React from 'react';
import "../../css/Products/Products.css";
function Products(props) {
    return (
        <div className="products-wrapper">
            {props.products.map(item => {
                return (
                    <div className="product-item" key={item.id}>
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="product-desc">
                            <p>{item.title}</p>
                            <span>{item.price}</span>
                        </div>
                        <button>Add To Cart</button>
                    </div>
                )
            })}
        </div>
    );
};
export default Products;