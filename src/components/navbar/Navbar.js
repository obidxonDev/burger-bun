import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineArrowDown, AiOutlineSearch } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
 
function Navbar() {
  const [navbarToggle, setNavbarToggle] = useState(false)

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 80){
      setNavbarToggle(true)
    } else{
      setNavbarToggle(false)
    }
  })

  return (
    <div className='navbar'>
      <div className={navbarToggle ? "navbar__container container active" : "navbar__container container"}>
        <div className='items'>
          <div className="logo">
            <h1>
              <img src={logo} alt="" /> <p>Burger Bun</p>
            </h1>
          </div>
          <div className="nav__items">
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink>Menu</NavLink>
            <NavLink>Pages</NavLink>
            <NavLink>Contact</NavLink>
            <AiOutlineSearch/>
            <BsFillSunFill/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar