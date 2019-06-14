import React, { Component } from "react";

import Smurf from "./Smurf";
import styled from "styled-components";
import axios from "axios";
const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
  justify-content: center;
`;
const SmurfContainer = styled.div`
  margin: auto;
  display: flex;
  flex-flow: wrap;
  width: 1250px;
  justify-content: center;
`;
const CardHeader = styled.h1`
  display: flex;
  justify-content: center;
`;
class Smurfs extends Component {
  state = {
    smurfs: []
  };

  componentDidMount = () => {
    axios.get("/smurfs").then(res => {
      this.setState({
        smurfs: res.data
      });
    });
  };
  createSmurfs = () => {
    return this.state.smurfs.map(smurf => {
      return (
        <Smurf
          name={smurf.name}
          id={smurf.id}
          age={smurf.age}
          height={smurf.height}
          key={smurf.id}
          cb={this.cbRemoveSmurf}
        />
      );
    });
  };
  cbRemoveSmurf = id => {
    setTimeout(() => {
      if (id || id === 0) {
        let smurfs = this.state.smurfs.filter(smurf => smurf.id != id);
        console.log(smurfs);
        axios.delete(`smurfs/${id}`).then(res => {
          this.setState({
            smurfs: [...smurfs]
          });
        });
      }
    }, 1000);
  };
  render() {
    return (
      <Container>
        <CardHeader>Smurf Village</CardHeader>
        <SmurfContainer>{this.createSmurfs()}</SmurfContainer>
      </Container>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
