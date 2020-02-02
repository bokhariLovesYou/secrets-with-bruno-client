import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class privateSecret extends Component {
  state = { copied: "" };

  render() {
    const pathName = this.props.location.pathname.split("/").pop();
    console.log(pathName);
    const locationOrigin = window.location.origin;

    return (
      <div>
        <h1>You did it!</h1>
        <p>
          <strong>
            Please click the URL below to copy and access your secret!
          </strong>
        </p>
        <CopyToClipboard
          text={locationOrigin + `/secret/` + pathName}
          onCopy={() => this.setState({ copied: "copied" })}
        >
          <p className={"highlighted " + this.state.copied}>
            <strong>
              {locationOrigin}/secret/{pathName}
            </strong>
          </p>
        </CopyToClipboard>
        <p>
          <strong>
            This link will expire as soon as it's viewed and will not be
            accessible again.
          </strong>
        </p>
        <p>
          <strong>
            Therefore, please keep a note of that.{" "}
            <span aria-labelledby="heart">❤️️</span>
          </strong>
        </p>
      </div>
    );
  }
}

export default privateSecret;
