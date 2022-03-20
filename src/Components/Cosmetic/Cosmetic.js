import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    }
    const removeFromCart = id => {
        removeFromDb(id);
    }

    const removeCart = id =>{
        deleteShoppingCart(id);
    }

    /* const addToCartWithParam = () => addToCart(id);  */
    // <button onClick={addToCartWithParam}>Add to Cart</button>

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It is has id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={() => removeCart(id)}>Remove shopping cart</button>
        </div>
    );
};

export default Cosmetic;