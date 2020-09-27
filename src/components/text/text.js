import React from 'react';
import './text.css';
import hello from './hello.jpg';

const Text = () => {
    return (
        <div className="wrapper">
            <img src={hello} alt='text'></img>
            <div className="text">Hello Cursor!</div>
        </div>
    )
}

export default Text;