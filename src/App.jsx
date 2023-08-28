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
import Checkout from './components/Checkout';
import { CartProvider } from "./context/CartContext";


function App() {

  return (
      <div>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/Categoria" element={<ItemListContainer/>}/>
              <Route path="/Contacto" element={<Contacto/>}/>
              <Route path="/Carrito" element={<Carrito/>}/>
              <Route path="/Checkout" element={<Checkout  />}/>
            </Routes>
          
            <ItemListContainer greeting="¡Bienvenido a Il Forno!" />

            
          </BrowserRouter>
          </CartProvider>
      </div>
  );
}

export default App;

