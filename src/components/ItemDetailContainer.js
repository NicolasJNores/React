import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pedirItemPorId } from '../auxiliar/queryDato';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    pedirItemPorId(Number(id))
      .then((res) => setItem(res))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="item-detail-container">
      {item ? (
        <div className="item-detail">
          <img src={item.imagen} alt={item.titulo} />
          <div>
            <h3 className="titulo">{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="precio">Precio: ${item.precio}</p>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;


