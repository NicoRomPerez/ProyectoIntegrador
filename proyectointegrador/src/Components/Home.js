import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import '../App.scss'
import Body from './Body/Body'

const Home = () => {
  return (
    <div>
        <Header className="header"></Header>
        <Body></Body>
        <Footer className="footer"></Footer>
    </div>
  )
}

export default Home