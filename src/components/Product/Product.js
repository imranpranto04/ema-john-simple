import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller,price, stock} = props.product;
    return (
        <div className="product"> 
            <div>                         
                <img src={img} alt=""/>
            </div>

            <div>
                <h3 className="product-name">{name}</h3>
                <p><small>by: </small>{seller}</p>
                <br/>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon</p>

                <button className="main-button"
                onClick={ () => props.handleAddProduct(props.product)}>    

                <FontAwesomeIcon icon={faShoppingCart} />
                add to cart</button>

            </div>
        </div>
    );
};

export default Product;