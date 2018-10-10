import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contactos: state.contactos.filter(c => c.id !== action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contactos: [
      {
        id: 1,
        nombre: "Yael Chavoya",
        email: "yael@chavoya.com",
        tel: "32 32 32 32"
      },
      {
        id: 2,
        nombre: "José López",
        email: "jose@gmail.com",
        tel: "4884 3939"
      },
      {
        id: 3,
        nombre: "Susana Sáinz",
        email: "susisainz@gmail.com",
        tel: "1234 4556"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
