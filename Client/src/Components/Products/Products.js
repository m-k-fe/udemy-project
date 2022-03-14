import React, { useState } from 'react';
import ProductModal from './ProductModal';
import "../../css/Products/Products.css";
import Bounce  from 'react-reveal/Bounce';
function Products(props) {
    const [product , setProduct] = useState("");
    const openModal = (product) => {
        setProduct(product);
    };
    const closeModal = () => {
        setProduct(false);
    };
    return (
        <Bounce bottom cascade>
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
                            <button onClick={() => props.addToCart(item)}>Add To Cart</button>
                        </div>
                    )
                })}
                <ProductModal product={product} closeModal={closeModal} />
            </div>
        </Bounce>
    );
};
export default Products;