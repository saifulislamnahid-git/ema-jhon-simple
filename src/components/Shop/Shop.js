import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                <h1>This is Shop</h1>
                <h3>{products.length}</h3>
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <div>This is cart</div>
            </div>
        </div>
    );
};

export default Shop;