import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../assets/burgerlogo.png'
import css from '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>

            <img src={logo} alt="BurgerYiyelim Logo" className='logo'/>
            <div className='nav-links'>
                <NavLink to='/'>Homepage</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        
    </div>
  )
}

export default Navbar