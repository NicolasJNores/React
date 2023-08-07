import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaShoppingCart, FaBars } from 'react-icons/fa';
 

const CartWidget = () => {
  const itemCount = 5; 

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      {itemCount > 0 && (
        <span className="item-count">{itemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;
