import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className='navbar'>
      <h1>Mi Tienda</h1>
      <div className='nav-links'>
      <ul>
      <li><a className='btn' href='#'>Inicio</a></li>
          <li><a className='btn' href='#'>Contacto</a></li>
          <li><a className='btn' href='#'>Sobre Nosotros</a></li>
      </ul>
      </div>


      <CartWidget />
    </div>
  )
}

export default NavBar