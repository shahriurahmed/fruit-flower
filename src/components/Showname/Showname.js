import React from 'react';
import './Showname.css';

const Showname = (props) => {
    const { name, img } = props.item
    return (
        <div className='cartItem'>
            <div className='imgdiv'>
                <img className="grop-img" src={img} alt="" />
            </div>
            <div>
                <p className='itemName'>{name}</p>
            </div>


        </div>
    );
};

export default Showname;