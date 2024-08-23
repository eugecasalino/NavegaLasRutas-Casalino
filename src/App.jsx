import React from 'react'
<<<<<<< HEAD
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
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'



function App() {
  return (
    <>
>>>>>>> db6bfc4ebc54c904660f09a9150a34df8ec90a05
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
<<<<<<< HEAD
            <Route path='/cart' element={<Cart />} />
=======
>>>>>>> db6bfc4ebc54c904660f09a9150a34df8ec90a05
            <Route path="/" element={<ItemListContainer greeting="Gracias por visitarnos" />} />
            <Route path="*" element={<h2>404: Not Found</h2>} />
          </Routes>
        </div>
      </BrowserRouter>
<<<<<<< HEAD
      </CartProvider>
=======


>>>>>>> db6bfc4ebc54c904660f09a9150a34df8ec90a05
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> db6bfc4ebc54c904660f09a9150a34df8ec90a05
