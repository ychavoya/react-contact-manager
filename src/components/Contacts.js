import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contactos } = value;
          return (
            <React.Fragment>
              {contactos.map(contacto => (
                <Contact key={contacto.id} contacto={contacto} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
