import React, { Component } from "react";

export class RenderResultFailure extends Component {
  render() {
    return (
      <div>
        <h1>Oops, couldn't find your secret!</h1>
        <p>
          <strong>
            Are you sure you have the right link or it has not been viewed
            before?
          </strong>
        </p>
      </div>
    );
  }
}

export default RenderResultFailure;
