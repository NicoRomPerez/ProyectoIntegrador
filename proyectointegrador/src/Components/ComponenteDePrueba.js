import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import '../App.scss'
import Body from './Body/Body'
import LoginComponent from './Auth/Login/Login';
import CategoriesBlock from './Body/CategoriesBlock/CategoriesBlock'
import ListBlock from './Body/ListBlock/ListBlock'

const ComponenteDePrueba = () => {

  return (
    <div className='seeker'>
      <h1>
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <div className='seekerInputs'>
        <input className='inputPrimary'  placeholder='  ¿A donde vamos?'></input>
        <input type="date" className='inputPrimary'></input>
        <input type='button' className='buttonPrimary' value="Buscar"></input>
      </div>
      {/* <div>
        <Header className="header"></Header>
        <Body className="body">
          <CategoriesBlock></CategoriesBlock>
          <ListBlock></ListBlock>
        </Body>
        <Footer className="footer"></Footer>
      </div>  */}
    </div>
  )
}

export default ComponenteDePrueba