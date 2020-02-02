import React, { Component } from "react";
import styled from "styled-components";
import PlayareaNavContentsChildren from "./PlayareaNavContents";
const PlayareaNavContents = styled.header`
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 0 0;
`;

export class PlayareaNav extends Component {
  render() {
    return (
      <PlayareaNavContents>
        <PlayareaNavContentsChildren />
      </PlayareaNavContents>
    );
  }
}

export default PlayareaNav;
