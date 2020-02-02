import React, { Component } from "react";
import styled from "styled-components";

const PlayareaContentChildren = styled.div`
  padding: 1rem;
`;

class Playarea extends Component {
  render() {
    const { children } = this.props;
    return <PlayareaContentChildren>{children}</PlayareaContentChildren>;
  }
}

export default Playarea;
