import React from "react";
import PropTypes from "prop-types";

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
              <a href="/" className="nav-link">
                Inicio
              </a>
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
