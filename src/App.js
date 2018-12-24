import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./NewComponent";
import ToDoApp from "./ToDoApp";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
        <Dashboard />
    );
  }
}

export default App;
