import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import '../App.scss'
import Body from './Body/Body'
import LoginComponent from './Auth/Login/LoginComponent';

const ComponenteDePrueba = () => {
  return (
    <div>
      <div>
        <Header className="header"></Header>
        <Body></Body>
        <Footer className="footer"></Footer>
      </div>
      ComponenteDePrueba
      <form style={{backgroundColor: "red"}}>
        <input className="inputPrimary" type="text" placeholder="Input 1"></input>
        <input className="inputTextSecondary" type="text" placeholder="Input 2"></input>
        <input className="buttonPrimary" type="submit" value="Button 1"></input>
        <input className="buttonSecondary" type="submit"  value="Button 2"></input>
        <input className="buttonTthird" type="submit"  value="Button 3"></input>
      </form> 
    </div>
  )
}

export default ComponenteDePrueba