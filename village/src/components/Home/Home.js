import React, { Component } from "react";
import SmurfForm from "../SmurfForm";
import Smurfs from "../Smurfs";
import axios from "axios";
class Home extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div>
        <Smurfs />
      </div>
    );
  }
}

export default Home;
