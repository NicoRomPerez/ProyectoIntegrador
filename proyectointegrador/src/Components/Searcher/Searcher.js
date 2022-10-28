import React from 'react'
import { useState, useEffect } from "react";
import '../../App.scss'
import cities from './cities.json'

const Searcher = () => {

    const [optionCities,setOptionCities] = useState(cities)

  return (
    <div className='seeker'>
      <h1>
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <div className='seekerInputs'>
        <select className='inputPrimary'>
        {optionCities.map((city, index) => 
                <option key={index} value={city.name}>{city.name}</option>
            )}
        </select>
        <input type="date" className='inputPrimary'></input>
        <input type='button' className='buttonPrimary' value="Buscar"></input>
      </div>
    </div>
  )
}

export default Searcher