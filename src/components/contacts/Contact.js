import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  static defaultProps = {
    contacto: {
      nombre: "Nombre",
      email: "nombre@ejemplo.com",
      tel: "1234 5678"
    }
  };

  static propTypes = {
    contacto: PropTypes.object
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { id, nombre, email, tel } = this.props.contacto;

    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {nombre}{" "}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                  className="fas fa-caret-down"
                />
                <i
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Teléfono: {tel}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
