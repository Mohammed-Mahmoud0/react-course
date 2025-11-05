import React, { Component } from "react";
import { UserNameContext } from "../App";

export class Last extends Component {
  render() {
    return (
      <>
        {
          <UserNameContext.Consumer>
            {(userName) => <h2>Component {userName}</h2>}   
          </UserNameContext.Consumer>
        }
      </>
    );
  }
}

export default Last;
