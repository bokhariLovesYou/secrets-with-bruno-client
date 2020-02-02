import React, { Component } from "react";
import styled from "styled-components";
const WrapperContent = styled.main`
  height: 100vh;
  width: 100%;
  background-color: #b44f13;
  position: relative;
  overflow: hidden;
`;

class Wrapper extends Component {
  render() {
    const { children } = this.props;
    return <WrapperContent>{children}</WrapperContent>;
  }
}

export default Wrapper;
