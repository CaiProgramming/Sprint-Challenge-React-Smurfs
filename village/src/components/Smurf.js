import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  opacity:${props => (props.remove ? ".25" : "1")}
  position:${props => (props.remove ? "absolute" : "relative")}
  transition: all 1s

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
transition: all 1s;
  width:${props => (props.remove ? "1000px" : "500px")}
  height:${props => (props.remove ? "1000px" : "200px")}
  display: flex;
  flex-flow: column;
  margin: 25px;
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
const ParagraphContent = styled.p`
  font-size: 1rem;
  margin: 10px;
`;
const Remove = styled.p`
  font-size: 1.25rem;
  margin: 10px;
  cursor: pointer;
  user-select: none;
`;

class Smurf extends React.Component {
  state = {
    remove: false
  };
  RemoveHandler = () => {
    this.setState({
      remove: true
    });
    this.props.cb(this.props.id);
  };
  render() {
    return (
      <Container remove={this.state.remove}>
        <SmurfCard remove={this.state.remove}>
          <CardHeader>
            <HeaderContent>{this.props.name}</HeaderContent>
            <Remove onClick={this.RemoveHandler}>x</Remove>
          </CardHeader>
          <HeaderContent>{this.props.height} tall</HeaderContent>
          <ParagraphContent>{this.props.age} smurf years old</ParagraphContent>
        </SmurfCard>
      </Container>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
