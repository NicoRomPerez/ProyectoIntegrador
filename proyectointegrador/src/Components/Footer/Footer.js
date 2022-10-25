import React from 'react'
import copyRight from '../../Assets/copyRight.svg';
import ListIconsSocialNetworks from './ListIconsSocialNetworks';

const Footer = () => {
  return (
    <div  className="footer">
      <div>
      <a href="http://localhost:3000/register">
        <img src={copyRight} alt="Menu" />  
      </a>
      </div>
      <ListIconsSocialNetworks/>
    </div>
  )
}

export default Footer