import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/'><h1>Mi Tienda</h1></Link>

      <div className='nav-links'>
        <ul>
          <li><Link className='btn' to='/categoria/remeras'>Remeras</Link></li>
          <li><Link className='btn' to='/categoria/camperas'>Camperas</Link></li>
          <li><Link className='btn' to='/categoria/buzo'>Buzos</Link></li>
        </ul>
      </div>
      <CartWidget />
    </div>
  )
}

export default NavBar