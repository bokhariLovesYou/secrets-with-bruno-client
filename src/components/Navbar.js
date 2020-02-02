import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";
const NavbarContent = styled.header`
  padding: 1rem 0;
  background-color: transparent;
  text-align: center;
`;

class Navbar extends Component {
  render() {
    return (
      <NavbarContent>
        <Logo />
      </NavbarContent>
    );
  }
}

export default Navbar;
