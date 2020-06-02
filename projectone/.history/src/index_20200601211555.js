import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// Insert the style on any element you want inside of its properties!! 
var style ={
  backgroundColor: "orange",
  color: "teal",
  fontFamily: "Times new roman"
}
// create a new element to the DOM
// const title =React.createElement(
//   "ul",
//   {id: "title", className: "header", style:style},
//   React.createElement(
//     "li",
//     // The properties would go in here if you wanted to add properties to this.
//     {},
//     // name of list or item in the list
//     "Item on list"
//   )
 

// )

// redners the items listed to the DOM
ReactDOM.render(
  <div>
    <h1>Hello Word</h1>
    <p>We're Glad you're here!</p>
  </div>,
  
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
