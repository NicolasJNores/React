import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/ilforno" element={<Greeting />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} /> 
      </Routes>
    </BrowserRouter>
  );
};

const Greeting = () => {
  return <h2>Bienvenido a Il Forno</h2>;
};

export default App;


