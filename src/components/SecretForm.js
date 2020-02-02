import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import axios from "axios";

const SecretFormContents = styled.div`
  textarea {
    width: 100%;
    border: none;
    background-color: #fff;
    border-radius: 4px;
    padding: 1rem;
    min-height: 150px;
    border: 5px solid #eee;
    font-weight: 900;
    margin-bottom: 0.5rem;
    &:focus {
      outline: none;
    }
  }
  .error-text {
    margin-bottom: 0;
  }
  .tint {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: 0.2s ease;
    &.active {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transition: 0.2s ease;
      background-color: rgba(255, 255, 255, 0.6);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 1111;
    }
  }
`;

class SecretForm extends Component {
  state = {
    body: "",
    loading: "inactive",
    erros: {}
  };

  handleChange = event => {
    console.log(this.state.body);
    this.setState({
      body: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: "active"
    });
    const userData = {
      body: this.state.body
    };
    axios
      .post("/secret", userData)
      .then(res => {
        console.log(res.data);
        this.setState({
          loading: "inactive"
        });
        this.props.history.push(`/privateSecret/${res.data.SecretId}`);
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({
          errors: err.response.data,
          loading: "inactive"
        });
      });
  };
  render() {
    const { errors } = this.state;
    return (
      <SecretFormContents>
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            placeholder={this.props.title}
            required
          ></textarea>
          <div className="validation">
            <p className="error-text">{errors}</p>
          </div>
          <Button fullWidth type="submit">
            Create a Secret Link
          </Button>
        </form>
        <div className={`tint ` + this.state.loading}></div>
      </SecretFormContents>
    );
  }
}

export default SecretForm;
