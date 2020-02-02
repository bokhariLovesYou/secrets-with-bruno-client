import React, { Component } from "react";
import styled from "styled-components";

// Layout
import Container from "react-bootstrap/Container";

// Components
import PlayareaNav from "./PlayareaNav";
import PlayareaContents from "./PlayareaContents";

const PlayareaContent = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  height: 87vh;
  overflow-y: scroll;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

class Playarea extends Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <PlayareaContent>
          <PlayareaNav />
          <PlayareaContents>{children}</PlayareaContents>
        </PlayareaContent>
      </Container>
    );
  }
}

export default Playarea;
