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

    const resetPage = () => {
        const clearpage = document.getElementById("cartItems");
        clearpage.innerHTML = "";

    }

    const setRandomitem = () => {
        const totalItem = newItem.length;
        const selectItem = Math.random() * totalItem;
        let randomitem = Math.round(selectItem);
        console.log(randomitem);


        if (randomitem === 0) {
            randomitem = 1;
            let item = newItem[randomitem];
            const showitem = document.getElementById("cartItems");
            showitem.innerHTML = `
            <img
                    src="${item.img}"
                  />
            
           <h2> ${item.name}<h2>`;


        }
        else if (randomitem >= newItem.length) {
            randomitem = newItem.length - 1;
            let item = newItem[randomitem];
            const showitem = document.getElementById("cartItems");
            showitem.innerHTML = `<img
            src="${item.img}"
          />
          <h2> ${item.name}<h2>`;

        }

        else if (randomitem < newItem.length && randomitem >= 0) {
            let item = newItem[randomitem];
            const showitem = document.getElementById("cartItems");
            showitem.innerHTML = `<img
            src="${item.img}"
          />
          <h2> ${item.name}<h2>`;

        }

    }

    return (
        <div className="cart-details">
            <h1>My Cart </h1>
            <div className="items" id='cartItems' >
                {
                    newItem.map(item => <Showname
                        item={item}
                    ></Showname>)
                }

            </div>
            <button className='btn resetBtn' onClick={resetPage}>Reset</button>
            <button className='btn chooseBtn' onClick={setRandomitem}>Pick Random Item</button>

        </div>
    );
};

export default Cart;