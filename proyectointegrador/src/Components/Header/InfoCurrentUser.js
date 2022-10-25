import React, { useState } from 'react'

const InfoCurrentUser = () => {
    const [infoUser,SetInfoUser] = useState({
        nombre: 'Nicolas',
        apellido: 'Romero',
    })

  return (
    <div>
        <div>
            <h1>NR</h1>
        </div>
        <div>
            <label>Hola,</label>
            <label>{`${infoUser.nombre} ${infoUser.apellido}`}</label>
        </div>
    </div>
  )
}

export default InfoCurrentUser