import React from 'react'
import logo from '../../Assets/logo.svg';
import hamburgerMenu from '../../Assets/hamburgerMenu.svg';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={hamburgerMenu} className="hamburgerMenu" alt="logo" />
      <ul className="menu">
        <li><a  href="http://localhost:3000/home">Home</a></li>
        <li><a  href="http://localhost:3000/register">register</a></li>
        <li><a  href="http://localhost:3000/login">login</a></li>
      </ul>
    </div>
  )
}

export default Header