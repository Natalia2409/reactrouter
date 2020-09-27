import React from 'react';
import './App.css';

const Post = ({name, photo, nickname, content, image, date}) => {
    return (
        <div id="block">
            <div id="avatar">
                {photo}
            </div>
            <div id="main">
                <div id="header">
                    <span>{name}</span> * {nickname} * {date}
                </div>
                <div id="text">{content}</div>
                <div id="img">{image}</div>
            </div>
        </div>
    )
}

export default Post;