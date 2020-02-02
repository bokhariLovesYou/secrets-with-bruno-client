import React, { Component } from "react";

export class about extends Component {
  render() {
    return (
      <div>
        <h1>Hey!</h1>
        <p>
          <strong>
            Secrets with Bruno let's you safely share secrets. Whether it's a
            password, a url or anything which could be personal to you.
          </strong>
        </p>
        <p>
          <strong>
            Whatever you share can only be viewed by a user once. What that
            means is, that any secret viewed once is deleted forever and cannot
            be, thus, viewed again.
          </strong>
        </p>
      </div>
    );
  }
}

export default about;
