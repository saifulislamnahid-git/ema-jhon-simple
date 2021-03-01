import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    console.log(props.product);
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>By: </small>{seller}</p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in stock - order soon</small></p>
            </div>
        </div>
    );
};

export default Product;