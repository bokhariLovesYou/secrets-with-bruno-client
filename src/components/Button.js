import React, { Component } from "react";
import styled from "styled-components";
const ButtonContents = styled.button`
  border: none;
  background-color: #b44f13;
  color: #fff;
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  padding: 1rem;
  border-radius: 5px;
  font-weight: 900;
  margin: 0;
  &:hover {
    background-color: #883d10;
  }
  &:focus {
    outline: none;
  }
`;

class Button extends Component {
  render() {
    const { children } = this.props;
    return (
      <ButtonContents {...this.props} type={this.props.type}>
        {children}
      </ButtonContents>
    );
  }
}

export default Button;
