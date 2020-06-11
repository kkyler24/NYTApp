import React from 'react';
import ReactDOM from 'react-dom';
import './App.c';

class Hello extends React.Component {
    render(){
        return(
<h1>Hello There!!</h1>
        )
    }
    
}
ReactDOM.render (<Hello/>, document.getElementById("root"));

export default App;