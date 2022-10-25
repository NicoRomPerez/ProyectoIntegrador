import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Body from '../../Body/Body'
import Input from '../../Commons/Input/Input'
import './../auth.scss'
import './Register.scss'
const Register = () => {
  return (
    <div className='auth'>
        <Header className="header"></Header>
        <Body className='container'> 
          <div className='card-login'>
            <h1 className='tittle'>
              Crear cuenta
            </h1>
            <div className='full-name'>
              <Input label='Nombre'/>
              <Input label='Apellido'/>
            </div>
              <Input label='Correo electrónico'/>
              <Input label='Contraseña'/>
              <Input label='Confirmar contraseña'/>
              <div className='container-button'>
                <button className='buttonPrimary'>
                  Crear cuenta
                </button>
              </div>
            </div>
          </Body>
          <Footer className="footer"></Footer>
    </div>
  )
}

export default Register
