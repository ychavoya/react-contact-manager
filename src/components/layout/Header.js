import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { titulo } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3 bg-success py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {titulo}
        </a>

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Agregar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> Acerca de
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  titulo: "My App"
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;
