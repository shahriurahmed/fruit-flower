import React, { useState, useEffect } from 'react';
import Details from '../Details/Details';
import Cart from '../Cart/Cart';
import './Myshop.css';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewitem] = useState([]);
    useEffect(() => {
        fetch('./fruitflower.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    const handleEvent = (shopItem) => {
        const addItem = [...newItem, shopItem]
        setNewitem(addItem);
    }
    return (
        <div className="items-container">
            <div className="item">


                {
                    items.map(shopItems => <Details
                        key={shopItems.name}
                        item={shopItems}
                        handleEvent={handleEvent}
                    ></Details>)
                }

            </div>

            <div className="cart">
                <Cart
                    newItem={newItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;