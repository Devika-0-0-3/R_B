import React from 'react'
import react from '../assets/react.svg'
import {NavLink} from 'react-router-dom'

/*Link or NavLink it will be converted to anchor tag <a>*/
/* Using NavLink instead of Link allows us to apply styles to the active link */ 

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={react} alt=''/>
      <ul className='nav-links'>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default Navbar
