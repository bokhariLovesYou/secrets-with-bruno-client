import React, { Component } from "react";
import Button from "./Button";
import styled from "styled-components";
import axios from "axios";
const ResultBody = styled.div`
  width: 100%;
  border: none;
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  min-height: 150px;
  border: 5px solid #eee;
  font-weight: 900;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  margin-top: 1rem;
  display: none;
  white-space: pre-wrap;
  &.true {
    display: block;
  }
`;

export class RenderResultSuccess extends Component {
  state = {
    secretShown: false
  };

  showSecret = () => {
    if (!this.state.secretShown) {
      this.setState({
        secretShown: true
      });
      axios
        .delete(`/secret/${this.props.secretId}`)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div>
        <h1 className={"result-heading " + this.state.secretShown}>
          Hey! Thanks for stopping by!
        </h1>
        <p className={"result-text " + this.state.secretShown}>
          <strong>Here's your secret!</strong>
        </p>
        <div className={`result-content ` + this.state.secretShown}>
          <p>
            <strong>Someone sent you a secret!</strong>
          </p>
          <p>
            <strong>Please click the button below to view the secret.</strong>
          </p>
          <p>
            <strong>
              This link will expire as soon as it's viewed and will not be
              accessible again. Please keep a note of that.{" "}
              <span aria-label="heart" role="img">
                ❤️️
              </span>
            </strong>
          </p>
          <Button onClick={this.showSecret}>View My Secret</Button>
        </div>
        <ResultBody className={this.state.secretShown}>
          {this.props.foundSecret}
        </ResultBody>
      </div>
    );
  }
}

export default RenderResultSuccess;
