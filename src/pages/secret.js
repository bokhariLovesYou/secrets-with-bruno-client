import React, { Component } from "react";
import axios from "axios";
import RenderResultSuccess from "../components/RenderResultSuccess.js";
import RenderResultFailure from "../components/RenderResultFailure.js";

class secret extends Component {
  state = {
    secrets: null,
    foundSecret: false,
    body: "",
    loading: SVGComponentTransferFunctionElement,
    secretId: ""
  };
  componentDidMount() {
    const pathName = this.props.location.pathname.split("/").pop();
    axios
      .get("/secrets")
      .then(res => {
        this.setState({
          secrets: res.data
        });
      })
      .then(() => {
        this.state.secrets.forEach(elem => {
          if (elem.SecretId === pathName) {
            this.setState({
              foundSecret: true,
              body: elem.body,
              secretId: elem.SecretId
            });
          }
        });
        this.setState({
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const renderResult = () => {
      if (this.state.loading) {
        return <p>Loading...</p>;
      }
      if (this.state.foundSecret) {
        return (
          <RenderResultSuccess
            foundSecret={this.state.body}
            secretId={this.state.secretId}
          />
        );
      } else {
        return <RenderResultFailure />;
      }
    };

    return <div>{renderResult()}</div>;
  }
}
export default secret;
