import React from 'react';
import './Showname.css';

const Showname = (props) => {
    const { name, img } = props.item
    return (
        <div>
            <div>
                <img className="grop-img" src={img} alt="" />
            </div>
            <div>
                <p>Name: {name}</p>
            </div>


        </div>
    );
};

export default Showname;