import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/"> <img src='https://i.pinimg.com/originals/d8/43/ad/d843addbfcec31846d8699feebcf358b.png' className='navLogo'></img> </Link>
        <Link to="/login"> SESIÓN </Link>
      </div>
    </div>
    
  );
};


export default NavBar