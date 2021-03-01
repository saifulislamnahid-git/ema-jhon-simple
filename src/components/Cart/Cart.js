import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total, prd) => total + prd.price,0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice+product.price;
    }

    // Shipping cost
    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }else if (totalPrice > 15) {
        shipping = 4.99;
    }else if (totalPrice > 0) {
        shipping = 12.99;
    }

    const tax = Math.round(totalPrice/10);
    const grandTotal = Number(totalPrice+shipping+Number(tax)).toFixed(2);

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {totalPrice}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax+ VAT: {tax}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;