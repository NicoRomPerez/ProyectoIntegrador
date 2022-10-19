import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import '../App.css'
import Body from './Body/Body'

const Home = () => {
  return (
    <div>
        <h3 className="ResposiveMobile">Proyecto Integrador mobile</h3>
        <h3 className="ResposiveLaptop">Proyecto Integrador laptop</h3>
        <h3 className="ResposiveTablet">Proyecto Integrador tablet</h3>
        {/* <h3 className="ResposiveLargeScreen">Proyecto Integrador large screen</h3> */}
        <h1>Home</h1>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
  )
}

export default Home