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
            <h1>My Cart </h1>
            <h3 className='info'>Item count: {newItem.length}</h3 >
            <h3 className='info'>Total Cost: {total}</h3>

            <div className="items">
                {
                    newItem.map(item => <Showname
                        item={item}
                    ></Showname>)
                }

            </div>
            <button className='btn resetBtn'>Reset</button>
            <button className='btn chooseBtn'>Pick Random Item</button>

        </div>
    );
};

export default Cart;