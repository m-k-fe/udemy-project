import React, { useState } from 'react';
import ProductModal from './ProductModal';
import "../../css/Products/Products.css";
function Products(props) {
    const [product , setProduct] = useState("");
    const openModal = (product) => {
        setProduct(product);
    };
    const closeModal = () => {
        setProduct(false);
    };
    return (
        <div className="products-wrapper">
            {props.products.map(item => {
                return (
                    <div className="product-item" key={item.id}>
                        <a href="#" onClick={() => openModal(item)}>
                            <img src={item.imageUrl} alt={item.title} />
                        </a>
                        <div className="product-desc">
                            <p>{item.title}</p>
                            <span>${item.price}</span>
                        </div>
                        <button>Add To Cart</button>
                    </div>
                )
            })}
            <ProductModal product={product} closeModal={closeModal} />
        </div>
    );
};
export default Products;