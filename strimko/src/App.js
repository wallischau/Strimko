import React, { Component } from 'react';
// import './App.css';
import Header from "./components/Header";
import Playmat from "./components/Playmat";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div> 
        </div>
        <div className="row">
          <div className="col-md-4">
            <Playmat/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
