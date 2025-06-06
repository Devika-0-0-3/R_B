import React from 'react'
import react from '../assets/react.svg'
import {NavLink,useNavigate} from 'react-router-dom'

/*Link or NavLink it will be converted to anchor tag <a>*/
/* Using NavLink instead of Link allows us to apply styles to the active link */ 

const Navbar = () => {

    const navigate=useNavigate()

  return (
    <div className='navbar'>
      <img src={react} alt=''/>
      <ul className='nav-links'>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/job'><li>Jobs</li></NavLink>
      </ul>
      <button onClick={()=>navigate('/about',{replace:true})}>Get Started</button>
    </div>
  )
}
/*useNavigate stores navigation history in history stack*/
/*To navigate to new location , replace the current location or navigate to forward or backward n history stack*/

export default Navbar
