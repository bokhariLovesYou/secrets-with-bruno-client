import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  padding: 0 1rem;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    p {
      margin-bottom: 0;
      font-weight: 900;
      padding-left: 0.5rem;
      color: #000;
    }
    .menuModalWrapper {
      position: absolute;
      left: 0;
      top: 2rem;
      background-color: #ffff;
      padding: 0.5rem;
      border-radius: 4px;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
      display: block;
      pointer-events: all;
      z-index: 99999999;
      ul {
        padding: 0;
        list-style: none;
        margin: 0;
        li {
          a {
            font-weight: 900;
            padding: 1rem;
            border-bottom: 2px solid #eee;
            color: #4d4d4d;
            display: block;
            &:hover {
              text-decoration: none;
              background-color: rgba(0, 0, 0, 0.05);
              border-radius: 4px;
            }
          }
          &:last-child {
            a {
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
`;

export class PlayareaNavContents extends Component {
  container = React.createRef();
  state = {
    open: false
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  };

  render() {
    return (
      <Wrapper ref={this.container}>
        <div id="menuToggler" onClick={this.handleButtonClick}>
          <style>
            {`.className {shape-rendering: geometricprecision;margin-left: 0px;color: black;}`}
          </style>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="svgClass"
          >
            <path
              fillRule="evenodd"
              className=""
              fill="currentColor"
              d="M4.80153237,6.00002 L11.1984676,6.00002 C11.8579881,6.00002 12.2338734,6.76912179 11.8387119,7.30861993 L8.64024427,11.6724979 C8.3194337,12.1091674 7.6805663,12.1091674 7.3611326,11.6724979 L4.1612881,7.30861993 C3.76612658,6.76912179 4.14201193,6.00002 4.80153237,6.00002"
            ></path>
          </svg>
          <p>Menu</p>
          {this.state.open && (
            <div className="menuModalWrapper">
              <ul>
                <li>
                  <Link to="/about">
                    What is <span className="pink">Secrets with Bruno?</span>
                  </Link>
                </li>
                <li>
                  <Link to="/why">
                    Why did I <span className="brown">create this?</span>
                  </Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://designwithbruno.com/"
                  >
                    Explore <span className="purple">Design with Bruno</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Wrapper>
    );
  }
}

export default PlayareaNavContents;
