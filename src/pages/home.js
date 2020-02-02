import React, { Component } from "react";
import SecretForm from "../components/SecretForm";

class home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Secrets with Bruno.</h1>
        <p>Paste a password, secret message or private link below.</p>
        <p>
          <strong>A secret gets deleted as soon as it's viewed</strong>
        </p>
        <SecretForm
          history={this.props.history}
          title="Write a secret..."
        ></SecretForm>
      </div>
    );
  }
}

export default home;
