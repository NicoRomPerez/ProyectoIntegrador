import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import '../App.scss'
import Body from './Body/Body'
import LoginComponent from './Auth/Login/LoginComponent';

const Login = () => {
  return (
    <div>
        <Header className="header"></Header>
        <Body>
            <LoginComponent></LoginComponent>
        </Body>
        <Footer className="footer"></Footer>
    </div>
  )
}

export default Login