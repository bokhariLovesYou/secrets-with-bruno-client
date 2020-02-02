import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoWrapper = styled.div``;
const LogoBox = styled.div`
  width: 45px;
  height: 45px;
  background: #272727;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
`;
const LogoSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-weight: 900;
  color: #fff;
  font-size: 1.6rem;
  line-height: 1rem;
  padding-top: 0.2rem;
`;

class Logo extends Component {
  render() {
    return (
      <LogoWrapper>
        <Link to="/">
          <LogoBox>
            <LogoSpan>Ö</LogoSpan>
          </LogoBox>
        </Link>
      </LogoWrapper>
    );
  }
}

export default Logo;
