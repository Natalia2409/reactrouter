import React from 'react';
import './contact.css';

const Contact = (contacts) => {
    const {firstName, lastName, phone, gender} = contacts;

    return (
        <div className="Contact">
            <div className="name-first">
                <div className="name">{firstName} {lastName}</div>
                <div className="gender">{gender}</div>
            </div>
            <div className="phone">{phone}</div>
            <hr/>
        </div>
    )
}

export default Contact;