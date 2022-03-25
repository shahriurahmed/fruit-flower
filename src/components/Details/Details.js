import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Details.css';

const Details = (props) => {
    const { name, price, img } = props.item;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="item-details">
            <div>
                <img className="item-image" src={img} alt="" />

                <h3>{name}</h3>
                <p>Price: {price}</p>
                <button onClick={() => props.handleEvent(props.item)} className="cart-button">{icon}  Add to Cart</button>
            </div>
        </div>

    );
};

export default Details;