import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import DetailHeader from "../DetailHeader/DetailHeader";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import DetailAddress from "../DetailAddress/DetailAddress";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import GaleryComponent from "../GaleryDetail/GaleryComponent";
import Description from "../ProductDescriptiom/Description";

const ProductDetail = () => {

  const urlBase = 'https://pokeapi.co/api/v2/'
  const getPokemon = urlBase + 'pokemon/'

  
  const [isLoading, setIsLoading] = useState(true);
  const [pokeInfo,setPokeInfo] = useState({});

  useEffect(() => {
    let item = 'pikachu'
    fetch(getPokemon+item)
    .then((response) => response.json())
    .then((pokemon) => {
        console.log(pokemon) 
    })
    .catch(function(error) {
        alert("error")
    });
    
  }, []);

  return (
    <div>
      <Header className="header" />
      <DetailHeader />
      <DetailAddress />
      <Body className="body">
      <GaleryComponent></GaleryComponent>
      <Description></Description>
       {/* <Carousel images={images} style={{ height: 500, width: 800 }} />  */}
      </Body>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default ProductDetail;
