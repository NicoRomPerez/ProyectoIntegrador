import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Body from './Body/Body'

const Register = () => {
  return (
    <div>
        <h3 className="ResposiveMobile">Proyecto Integrador mobile</h3>
        <h3 className="ResposiveLaptop">Proyecto Integrador laptop</h3>
        <h3 className="ResposiveTablet">Proyecto Integrador tablet</h3>
        {/* <h3 className="ResposiveLargeScreen">Proyecto Integrador large screen</h3> */}
        <h1>Register</h1>
        <Header className="header"></Header>
        <Body></Body>
        <Footer className="footer"></Footer>
    </div>
  )
}

export default Register