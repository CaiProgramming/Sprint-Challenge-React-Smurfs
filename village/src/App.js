import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Form from "./components/SmurfForm";
import Update from "./components/UpdateForm";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
