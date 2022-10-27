import React, { useState } from 'react'
import iconClose from '../../Assets/iconClose.svg';


const InfoCurrentUser = ({firstName,lastName}) => {
    console.log(firstName)
    console.log(lastName)
    const [infoUser,SetInfoUser] = useState({
        nombre: firstName,
        apellido: lastName,
    })

  return (
    <div className='infoUser'>
        <a href='http://localhost:3000/home'>
            <img src={iconClose} alt="icon"/>
        </a>
        <div className='iconInfoUser'>
            <h5>NR</h5>
        </div>
        <div className='greetingUser'>
            <label>Hola,</label>
            <label><b>{`${infoUser.nombre} ${infoUser.apellido}`}</b></label>
        </div>
    </div>
  )
}

export default InfoCurrentUser