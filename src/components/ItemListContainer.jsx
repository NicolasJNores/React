import React, {useEffect, useState } from 'react';
import { pedirDatos } from '../auxiliar/pedirDatos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [productos, setProdctos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;
    

    useEffect(() => {
      pedirDatos()
          .then((res) => {
            if (categoria){
              setProdctos(res.filter((prod) => prod.categoria === categoria));
              setTitulo(categoria);
            }else {
              setProdctos(res);
              setTitulo("Prodcutos");
            }
            
          })
    }, [categoria])
    

  return (
    <div>
      <ItemList productos ={productos} titulo={titulo}/>
    </div>
  );
};

export default ItemListContainer;
