import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path="/" element={<ItemListContainer greeting="Gracias por visitarnos" />} />
            <Route path="*" element={<h2>404: Not Found</h2>} />
          </Routes>
        </div>
      </BrowserRouter>


    </>
  )
}

export default App