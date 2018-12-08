import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./NewComponent";
import ToDoApp from "./ToDoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
          <NewComponent name="Taylor 1" />
          <NewComponent name="Taylor 2" />
          <NewComponent name="Taylor 3" />
          <NewComponent name="Taylor 4 " />
          <NewComponent name="Taylor 5" />

          <ToDoApp />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
