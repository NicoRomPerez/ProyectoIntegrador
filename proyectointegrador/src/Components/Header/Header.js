import React from 'react'
import { useState, useEffect } from "react";
import logo from '../../Assets/logo.svg';
import slogan from '../../Assets/slogan.svg';
import hamburgerMenu from '../../Assets/hamburgerMenu.svg';
import InfoCurrentUser from './InfoCurrentUser';

const Header = ({a}) => {

  const [sesion, setSesion] = useState({
    'firstName': "",
    'lastName': "",
    'isActive': false 
  })

  const [pageLocation, setPageLocation] = useState(window.location.href.split('/').pop())

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
     setSesion({
      'firstName': user.firstName,
      'lastName': user.lastName,
      'isActive': user.isActive 
    })
    }else{
      console.log("No hay sesión iniciada")
    }
  }, []);


  return (
    <div className="header">

      <div>
        <a  href="http://localhost:3000/home">
         <img src={logo} className="App-logo" alt="logo"/>
        </a>
        <a  href="http://localhost:3000/home">
         <img src={slogan} className="slogan" alt="slogan" />  
       </a>
      </div>


      <a className="hamburgerMenu" href="http://localhost:3000/componentePrueba">
          <img src={hamburgerMenu} alt="Menu" />  
      </a>
      {sesion.isActive?
      <InfoCurrentUser firstName={sesion.firstName} lastName={sesion.lastName}/>:
      <ul className='menu'>
        {pageLocation ==="login" ? 
        <li>
          <a href="http://localhost:3000/register">
            <input className="buttonTthird" type="submit" value="Crear cuenta"></input>
          </a>
        </li>:
          <></>
        }
        {pageLocation ==="register" ? 
        <li>
          <a  href="http://localhost:3000/login">
           <input className="buttonTthird" type="submit" value="Iniciar sesión"></input>
          </a>
        </li>:
        <></>
        }
        {pageLocation ==="home" ? 
        <>
        <li>
          <a href="http://localhost:3000/register">
            <input className="buttonTthird" type="submit" value="Crear cuenta"></input>
          </a>
        </li>
        <li>
          <a  href="http://localhost:3000/login">
            <input className="buttonTthird" type="submit" value="Iniciar sesión"></input>
          </a>
        </li>
        </>:
        <></>
        }
      </ul>}
    </div>
  )
}

export default Header