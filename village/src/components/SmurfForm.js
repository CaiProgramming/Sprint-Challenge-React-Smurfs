import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
const Input = styled.input`
  margin: 10px;
  border: none;
  width: 50%;
  border-bottom: 2px black solid;
  &:focus {
    outline: none;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 75px;
  width: 100%;
  background-color: black;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const SmurfCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 25px;
  width: 500px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media (max-width: 1300px) {
    margin: 10px 0px;
  }
`;

const HeaderContent = styled.h1`
  font-size: 1.5rem;
  margin: 10px;
`;
const Btn = styled.button`
  margin: 10px;
  border-radius: 10px;
  border-style: solid;
  cursor: pointer;
`;
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post("smurfs", {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <SmurfCard>
          <CardHeader>
            <HeaderContent>Add a Smurf</HeaderContent>
          </CardHeader>
          <form onSubmit={this.addSmurf}>
            <Container>
              <Input
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
                name="name"
              />
              <Input
                onChange={this.handleInputChange}
                placeholder="age"
                value={this.state.age}
                name="age"
              />
              <Input
                onChange={this.handleInputChange}
                placeholder="height"
                value={this.state.height}
                name="height"
              />
            </Container>
            <Container>
              <Btn onClick={this.addSmurf} type="submit">
                Add to the village
              </Btn>
            </Container>
          </form>
        </SmurfCard>
      </Container>
    );
  }
}

export default SmurfForm;
