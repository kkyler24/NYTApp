import React from 'react';
import ReactDOM from 'react-dom';
import app from "./App"

const title = React.createElement (
  "h1",
  {id:"title", className:"header"},
)

ReactDOM.render(
  title,
  document.getElementById("root")
)