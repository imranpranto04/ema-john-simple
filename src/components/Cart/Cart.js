import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // count total = cart.reduce((total,prd) => total + prd.price, 0);
    let total = 0;
    for(let i=0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total >0 ){
        shipping = 12.99;
    }

    const tax = total / 10; 
    const grandTotal =( tax + shipping + total);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>vat + Tax: {tax}</p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;