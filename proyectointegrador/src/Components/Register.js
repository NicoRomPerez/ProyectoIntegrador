import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import '../App.scss'
import Body from './Body/Body'
import RegisterComponent from './Auth/Register/RegisterComponent'


const Register = () => {
  return (
    <div>
        <Header className="header"></Header>
        <Body>
          <RegisterComponent></RegisterComponent>
        </Body>
        <Footer className="footer"></Footer>
    </div>
  )
}

export default Register