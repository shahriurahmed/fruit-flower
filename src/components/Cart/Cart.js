import React from 'react';
import Showname from '../Showname/Showname';
import './Cart.css';

const Cart = (props) => {
    const { newItem } = props;
    let total = 0;
    for (const item of newItem) {
        total = total + item.price;
    }
    let itemName = [];
    for (const item of newItem) {
        itemName = itemName + item.name;
    }

    return (
        <div className="cart-details">
            <h3>Item count: {newItem.length}</h3>
            <h3>Total Cost: {total}</h3>
            <h3>Item Name: </h3>
            <div className="items">
                {
                    newItem.map(item => <Showname
                        item={item}
                    ></Showname>)
                }

            </div>

        </div>
    );
};

export default Cart;