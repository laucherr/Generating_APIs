import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Inspirational from './Inspirational';
import Motivational from './Motivational';
import ChuckNorris from './ChuckNorris';

ReactDOM.render(
  <div>
    
    <h1> Inspirational Quotes </h1>
    <Inspirational />
    <h1> Motivational Quotes </h1>
    <Motivational />
    
        <h1> Chuck Norris Jokes </h1> 
    <ChuckNorris />
  </div>,

  document.getElementById('root')
);






