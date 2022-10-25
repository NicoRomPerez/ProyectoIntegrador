import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Body from '../../Body/Body'
import Input from '../../Commons/Input/Input'
import './../auth.scss'

import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='auth'>
        <Header className="header"></Header>
        <Body className='container'> 

          <div className='card-login'>
            <h1 className='tittle'>
              Iniciar sesión
            </h1>
              <Input label='Correo electrónico'/>
              <Input label='Contraseña'/>
              <div className='container-button'>
                <button className='buttonPrimary'>
                  Ingresar
                </button>
              </div>
                <span className='go-to-register'>
                  ¿Aún no tienes cuenta? 
                  <Link to={'/register'}>Registrate</Link>
                </span>
            </div>
        </Body>
        <Footer className="footer"></Footer>
    </div>

  )
}

export default Login