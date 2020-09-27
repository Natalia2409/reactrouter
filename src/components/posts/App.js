import React from 'react';
import Post from'./posts';
import './App.css';


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const OBIWAN_IMAGE = "https://cdn.igromania.ru/mnt/news/2/d/3/0/7/f/92468/e1000e668a19caac_1920xH.jpg";
const postList = [
  {
    name: "Anakin skywalker",
    photo: <img id="photo" src={ANAKIN_IMAGE} alt="Anakin"/>,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: <img id="image" src={RAY_IMAGE} alt="Ray"/>,
    date: "26 лют."
  }, {
    name: "Anakin skywalker",
    photo: <img id="photo" src={ANAKIN_IMAGE} alt="Anakin"/>,
    nickname: "@dart_vader",
    content: "OMG!!!! It`s Obi-Wan Kenobi!! Cool!",
    image: <img id="image" src={OBIWAN_IMAGE} alt="oBIWAN"/>,
    date: "27 лют."
  }
];

function Posts() {
  return (
    <div className="over">
      { postList.map(post => <Post {...post}/>)}
    </div>
  );
}

export default Posts;
