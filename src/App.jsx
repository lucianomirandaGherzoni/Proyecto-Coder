import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import Cart from './componentes/Cart/Cart';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailConteiner/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import HeroCarrusel from './componentes/HeroCarrusel/HeroCarrusel';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <HeroCarrusel/>
        <Routes>
          <Route path='/' element ={ <ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element ={ <ItemListContainer />} />
          <Route path='/item/:idItem' element ={ <ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<h2>ERROR 404 </h2>} />
        </Routes>
      </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App