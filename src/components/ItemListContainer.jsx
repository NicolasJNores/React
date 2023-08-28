import React, {useEffect, useState } from 'react';
import { pedirDatos } from '../auxiliar/pedirDatos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = ({ greeting }) => {

    const [productos, setProdctos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;
    

    useEffect(() => {
      
      const productosRef = collection(db, "productos");

      const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

      getDocs(q)
        .then((resp) => {
          

          setProdctos(

            resp.docs.map((doc) => {
              return {...doc.data(), id: doc.id}
            })
          )
        })

    }, [categoria])
    

  return (
    <div>
      <ItemList productos ={productos} titulo={titulo}/>
    </div>
  );
};

export default ItemListContainer;
