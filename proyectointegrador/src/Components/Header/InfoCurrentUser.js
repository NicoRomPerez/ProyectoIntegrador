import React, { useState } from 'react'
import iconClose from '../../Assets/iconClose.svg';


const InfoCurrentUser = ({firstName,lastName}) => {
    console.log(firstName)
    console.log(lastName)
    const [infoUser,SetInfoUser] = useState({
        nombre: firstName,
        apellido: lastName,
    })

    const logOut = (e) => {
        e.preventDefault()
        window.localStorage.removeItem('currentUser')
        document.location.href = "http://localhost:3000/register"
    }

  return (
    <div className='infoUser'>
        <a onClick={logOut}>
            <img src={iconClose} alt="icon"/>
        </a>
        <div className='iconInfoUser'>
            <h5>{`${infoUser.nombre.substr(0,1)}${infoUser.apellido.substr(0,1)}`}</h5>
        </div>
        <div className='greetingUser'>
            <label>Hola,</label>
            <label><b>{`${infoUser.nombre} ${infoUser.apellido}`}</b></label>
        </div>
    </div>
  )
}

export default InfoCurrentUser