import React, { useEffect, useState } from 'react';
import { queryDato } from '../auxiliar/queryDato';
import Item from './Item';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await queryDato();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemListContainer;











