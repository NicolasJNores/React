import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from './CartWidget'; 
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="logo navbar-brand" to="/"><h1>Il Forno</h1></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FaBars />
      </button>
      <div className="botones-nav collapse navbar-collapse" id="navbarNav">
        <ul className="menu navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">Contacto</Link>
          </li>
        </ul>
        <CartWidget /> {}
      </div>
    </nav>
  );
};

export default NavBar;
