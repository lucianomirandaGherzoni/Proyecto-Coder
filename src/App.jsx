import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailConteiner/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element ={ <ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element ={ <ItemListContainer />} />
          <Route path='/item/:idItem' element ={ <ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App