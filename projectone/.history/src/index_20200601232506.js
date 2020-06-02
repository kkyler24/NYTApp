import React,{Component} from 'react';
// adding comma and component in the above line allows us to remove react.Component(line 16) and just use the word component as displaye din line 16
import {render} from 'react-dom';
// the above code allows you to import redner from reactDOm and get rid of reactDOM.redner below and just use render 
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

let bookData = {
  total:50,
  horror:30,
  mystery:20,
  goal: 70

}
// passing, rednering and displaying data in react
class BookReadCounter extends Component{
  render(){
    // also part of desstructing you can save your data into an var to shorten your code instead of writing everything all outyou can use the below code with const
    const {total, horror, mystery, goal} = this.props
    // Once you have done this all you hav eto do it write the actually data property name.as seen below in line 25
    return (
      <section>
        <div>
    <p>Total Books: {total}</p>
    <div>
    <p>Horror: {horror}</p>
    </div>
    <div>
    <p>mystery: {mystery}</p>
    </div>
    <div>
    <p></p>
    </div>
        </div>
        Books Read
      </section>
    )
  }
}
// which makes things cleaner and allows you to skip out on havingto continiously create a new element with react. using jsx
render(
 <BookReadCounter
 total={bookData.total}
 horror = {bookData.horror}
 goal = {bookData.goal}
 mystery = {bookData.mystery}
 />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
