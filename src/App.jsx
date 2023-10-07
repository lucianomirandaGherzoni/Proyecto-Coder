import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Proximamente Berlini Pastas!" subtitle="Primera Entrega del Proyecto Final"/>
    </>
  )
}

export default App