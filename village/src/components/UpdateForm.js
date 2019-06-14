import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
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
const InputSelect = styled.select`
  margin: 10px;
  border: none;
  border: 2px black solid;
  border-radius: 5px;
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
  align-items:center
  margin: 25px;
  width: 500px;
  height: 100%
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
class smurfForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: "",
    smurfs: [],
    id: ""
  };
  textHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  componentDidMount = () => {
    axios.get("/smurfs").then(res => {
      this.setState({ smurfs: res.data });
      console.log(res.data);
    });
  };
  optionsHandler = () => {
    if (this.state.smurfs) {
      return this.state.smurfs.map(smurf => {
        return (
          <option id={smurf.id} value={smurf.id}>
            {smurf.name}
          </option>
        );
      });
    }
  };
  handleChange = event => {
    let smurf = this.state.smurfs.filter(
      smurf => smurf.id == event.target.value
    );
    console.log(smurf);
    if (smurf[0]) {
      this.setState({
        name: smurf[0].name,
        age: smurf[0].age,
        height: smurf[0].height,
        id: smurf[0].id
      });
    }
  };
  submitHandler = () => {
    console.log(this.state.id);
    axios
      .put(`/smurfs/${this.state.id}`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => {
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <Container>
        <SmurfCard>
          <CardHeader>
            <HeaderContent>Update your smurfs</HeaderContent>
          </CardHeader>

          <InputSelect onChange={this.handleChange}>
            <option id="" value="" />
            {this.optionsHandler()}
          </InputSelect>

          <Input
            type="text"
            id="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.textHandler}
          />

          <Input
            type="text"
            id="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.textHandler}
          />

          <Input
            type="text"
            id="height"
            placeholder="height"
            value={this.state.height}
            onChange={this.textHandler}
          />

          <Btn onClick={this.submitHandler}>Submit smurf</Btn>
        </SmurfCard>
      </Container>
    );
  }
}

export default withRouter(smurfForm);
