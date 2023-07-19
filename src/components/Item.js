import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.titulo} />
      <h4>{producto.titulo}</h4>
      <p>Precio: ${producto.precio}</p>
      <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
    </div>
  );
};

export default Item;


