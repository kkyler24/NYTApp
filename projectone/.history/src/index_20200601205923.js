import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

var style ={
  backgroundColor: "orange",
  color: "teal",
  fontFamily: "Times new roman"
}
// create a new element to the DOM
const title =React.createElement(
  "h1",
  {id: "title", className: "header", style:style},
  "Hello Word"
)

ReactDOM.render(
  title,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
