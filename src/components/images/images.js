import React from 'react';
import './images.css';
import first from './1.jpg';
import second from './2.jpg';
import third from './3.jpg';

const Images = () => {
    return (
        <div className="general">
            <div className="im">
                <img src={first} alt="first"></img>
            </div>
            <div className="im">
                <img src={second} alt="second"></img>
            </div>
            <div className="im">
                <img src={third} alt="third"></img>
            </div>
        </div>
    )
}

export default Images;