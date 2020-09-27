import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <ul className="header-list">
                <li>
                    <Link to='/text'>
                        Text
                    </Link>
                </li>
                <li>
                    <Link to='/posts'>
                        Posts
                    </Link>
                </li>
                <li>
                    <Link to='/images'>
                        Photos
                    </Link>
                </li>
                <li>
                    <Link to='/contacts'>
                        Contacts
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;