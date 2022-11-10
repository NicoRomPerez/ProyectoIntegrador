import React from 'react'
import './GaleryComponent.scss'
import iconLikeIt from '../../Assets/iconLikeIt.svg';
import { useState, useEffect } from "react";
import share from '../../Assets/share.svg';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const GaleryComponent = () => {


  const [viewGalery, setViewGalery] = useState(false);
  const images = [13, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));

  const saludar = (e) => {
    e.preventDefault()
    setViewGalery(true)

  }

  return (
    <>
    <div className='galeryAction'>
    <img src={iconLikeIt} alt="Menu" />
    <img src={share} alt="Menu" />
    </div>
    <div className='GaleryComponent'>
        <div className='mainImage'>
            <img  className='one' src='https://i.pinimg.com/736x/24/23/3e/24233e4a87d1be9df8aec8d3181b010b.jpg'></img>
        </div>
        <div className='images'>
            <figure>
              <img className='two' src='https://i.pinimg.com/474x/bd/10/ba/bd10ba5bdbe609b1bb51dafc3a078834.jpg'></img>
                <figcaption>            
                </figcaption> 
            </figure>
            <figure>
              <img className='two' src='https://i.pinimg.com/474x/bd/10/ba/bd10ba5bdbe609b1bb51dafc3a078834.jpg'></img>
              {/* <figcaption>            
                  <a href='#' onClick={saludar}>ver mas</a> 
                </figcaption>  */}
            </figure>
            <figure>
              <img className='two' src='https://i.pinimg.com/474x/bd/10/ba/bd10ba5bdbe609b1bb51dafc3a078834.jpg'></img>
                <figcaption>            
                </figcaption> 
            </figure>
            <figure>
              <img className='two' src='https://i.pinimg.com/474x/bd/10/ba/bd10ba5bdbe609b1bb51dafc3a078834.jpg'></img>
                <figcaption>            
                  <a href='#' onClick={saludar}>ver mas</a> 
                </figcaption> 
            </figure>

        </div>
        {
          viewGalery ? 
          <div className='galery'>
          <Carousel images={images} style={{ height: 500, width: 800, opacity: 1}} />
          <a href="http://localhost:3000/detalle"><b>Cerrar</b></a>
          </div>  : 
          <></>
        }
        
        
              
    </div>
    </>
    
  )
}

export default GaleryComponent