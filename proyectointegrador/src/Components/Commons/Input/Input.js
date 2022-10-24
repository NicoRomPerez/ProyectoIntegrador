import React from 'react'
import './Input.scss'

const Input = ({label, ...props}) => {

  return (
      <div className='input-component'>
      

          <label>{label}</label>
          <input className='input-custom' {...props}/>
        
      </div>
      )
}

export default Input