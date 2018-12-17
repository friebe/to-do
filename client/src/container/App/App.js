import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import InputBox from "../../component/InputBox/InputBox";

class App extends Component {

  render() {
    return (
      <div className="container">
          <InputBox />
      </div>
    );
  }
}

export default App;

