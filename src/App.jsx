import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "./index.css";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <div>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/Categoria" element={<ItemListContainer/>}/>
            </Routes>
          
            <ItemListContainer greeting="¡Bienvenido a Il Forno!" />

            
          </BrowserRouter>
      </div>
  );
};

export default App;

