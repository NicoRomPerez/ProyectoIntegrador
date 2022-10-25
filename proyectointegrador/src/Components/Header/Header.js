import React from 'react'
import logo from '../../Assets/logo.svg';
import slogan from '../../Assets/slogan.svg';
import hamburgerMenu from '../../Assets/hamburgerMenu.svg';
import InfoCurrentUser from './InfoCurrentUser';

const Header = ({a}) => {
  console.log(a)
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


      <a className="hamburgerMenu" href="http://localhost:3000/home">
          <img src={hamburgerMenu} alt="Menu" />  
      </a>
      <ul className='menu'>
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
      </ul>  

      {/* {<InfoCurrentUser/>} */}
    </div>
  )
}

export default Header