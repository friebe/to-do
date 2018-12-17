import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import InputBox from "../../component/InputBox/InputBox";
import Header from '../Header/Header'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <InputBox />
      </div>
    );
  }
}

export default App;

