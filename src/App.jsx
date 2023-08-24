import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "./index.css";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacto from './components/Contacto';
import { CartContext } from './context/CartContext';

function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad};
    
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = carrito.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCarrito){
      estaEnElCarrito.cantidad=+ cantidad;
      setCarrito(nuevoCarrito);
    }else {
      nuevoCarrito.push(itemAgregado);
      
    }
    setCarrito(nuevoCarrito);       
}

  const itemCount = () => {
    return  carrito.reduce((acc, prod) => acc + producto.cantidad, 0)
  }

  return (
      <div>
        <CartContext.Provider value={ {carrito, agregarAlCarrito, itemCount} }>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/Categoria" element={<ItemListContainer/>}/>
              <Route path="/Contacto" element={<Contacto/>}/>
            </Routes>
          
            <ItemListContainer greeting="¡Bienvenido a Il Forno!" />

            
          </BrowserRouter>
        </CartContext.Provider>
      </div>
  );
};

export default App;

