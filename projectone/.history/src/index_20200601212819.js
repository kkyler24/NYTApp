import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// This is a class component in react
// All components need to be capitlized
class Message extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello People</h1>
      </div>
    )
  }
}


// renders the items listed to the DOM, putting elements directly in this area is using tag based syntax , which makes things cleaner and allows you to skip out on havingto continiously create a new element with react. using jsx
ReactDOM.render(
 <Message/>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
