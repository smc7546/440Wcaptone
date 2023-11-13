import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
  NavInfo,
} from './NavbarElements'

const Navbar = () => {
  return(
    <>
      <Nav>
        <NavMenu>
          <NavLogo to="/" className="navbar-logo">
            <img src="./myupmcLogo.png" />
          </NavLogo>
         </NavMenu>
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Messages' activeStyle>
            Messages
          </NavLink>
          <NavLink to='/Appointments' activeStyle>
            Appointments
          </NavLink>
          <NavLink to='/Health%20Summary' activeStyle>
            Active Summary
          </NavLink>
          <NavLink to='/Billing%20&%20Insurance' activeStyle>
            Billing & Insurance
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar