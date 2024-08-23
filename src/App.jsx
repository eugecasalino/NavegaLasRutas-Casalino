import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import { CartProvider } from './Context/CartContext'
import Cart from './Componentes/Cart/Cart'

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/" element={<ItemListContainer greeting="Gracias por visitarnos" />} />
            <Route path="*" element={<h2>404: Not Found</h2>} />
          </Routes>
        </div>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
