import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
 

const CartWidget = () => {
  const {itemCount}  = useContext(CartContext); 

  return (
    <div className="cart-widget">
      <Link to="/carrito" FaShoppingCart className="cart-icon"></Link>     
      {itemCount > 0 && (
        <span className="item-count">{itemCount()}</span>
      )}
    </div>
  );
};

export default CartWidget;
