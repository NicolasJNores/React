import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
 

const CartWidget = () => {
  const {cantidadEnCarrito}  = useContext(CartContext); 

  return (
    <div className="cart-widget">
      <Link to="/carrito" className="cart-icon">
        <FaShoppingCart/>
        <span className="item-count"> {cantidadEnCarrito()} </span>
      </Link>    
      
    </div>
  );
};

export default CartWidget;
