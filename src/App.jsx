import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "./index.css";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacto from './components/Contacto';
import { CartContext } from './context/CartContext';
import Carrito from './components/Carrito';
import { Link } from 'react-router-dom'

function App() {

  const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

  const [carrito, setCarrito] =useState ([]);

  const agregarAlCarrito = (item, cantidad ) => {
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCarrito){
      estaEnElCarrito.cantidad += cantidad;
    }else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
    
  }

  const itemCount = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  return (
      <div>
        <CartContext.Provider value={ {carrito, carritoInicial, agregarAlCarrito, itemCount, precioTotal, vaciarCarrito} }>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/Categoria" element={<ItemListContainer/>}/>
              <Route path="/Contacto" element={<Contacto/>}/>
              <Route path="/Carrito" element={<Carrito/>}/>
            </Routes>
          
            <ItemListContainer greeting="¡Bienvenido a Il Forno!" />

            
          </BrowserRouter>
        </CartContext.Provider>
      </div>
  );
};

export default App;

