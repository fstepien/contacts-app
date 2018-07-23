import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@internet.com",
        phone: "416 - 123 - 4567"
      },

      {
        id: 2,
        name: "Karen Williams",
        email: "bob@internet.com",
        phone: "416 - 123 - 4567"
      },

      {
        id: 3,
        name: "Amy Smith",
        email: "amy@internet.com",
        phone: "416 - 123 - 4567"
      }
    ]
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
