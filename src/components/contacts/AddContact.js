import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

export default class AddContact extends Component {
  state = {
    nombre: "",
    email: "",
    tel: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { nombre, email, tel } = this.state;

    // Verificar campos
    if (nombre.trim() === "") {
      this.setState({ errors: { nombre: "Nombre requerido" } });
      return;
    }
    if (email.trim() === "") {
      this.setState({ errors: { email: "Email requerido" } });
      return;
    }
    if (tel.trim() === "") {
      this.setState({ errors: { tel: "Teléfono requerido" } });
      return;
    }

    const nuevoContacto = {
      id: uuid(),
      nombre,
      email,
      tel
    };

    dispatch({
      type: "ADD_CONTACT",
      payload: nuevoContacto
    });

    this.setState({
      nombre: "",
      email: "",
      tel: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { nombre, email, tel, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Agregar contacto</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="nombre"
                    label="Nombre"
                    placeholder="Ingrese nombre"
                    value={nombre}
                    onChange={this.onChange}
                    error={errors.nombre}
                  />
                  <TextInputGroup
                    name="email"
                    label="Email"
                    placeholder="Ingrese email"
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    name="tel"
                    label="Teléfono"
                    placeholder="Ingrese teléfono"
                    value={tel}
                    onChange={this.onChange}
                    error={errors.tel}
                  />
                  <input
                    type="submit"
                    className="btn btn-block btn-light"
                    value="Agregar Contacto"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
