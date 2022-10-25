import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Body from "../../Body/Body";
import Input from "../../Commons/Input/Input";
import "./../auth.scss";
import "./Register.scss";
import {validateEmail, validatePassword, validateRePassword} from './../utils'
const Register = () => {
  const [password, setPassword]= useState("");
  const [rePassword, setRePassword]= useState("");
  const [email, setEmail]= useState("");
  const [errorsMsg, setErrorsMsg] = useState({});

  const onRegister = (e) => {
    e.preventDefault();

    validateEmail(email, setErrorsMsg);
    validatePassword(password, setErrorsMsg)
    validateRePassword(password, rePassword,setErrorsMsg)

    if (errorsMsg.email || errorsMsg.password || errorsMsg.rePassword) {
      return
    } 

    console.log('Guardado con exito')
  }
  return (
    <div className="auth">
      <Header className="header"></Header>
      <Body className="container">
        <div className="card-login">
          <h1 className="tittle">Crear cuenta</h1>
          <form onSubmit={onRegister}>
            <div className="full-name">
              <Input label="Nombre" />
              <Input label="Apellido" />
            </div>
            <Input label="Correo electrónico" value={email} type="email" onChange={(e) => setEmail(e.target.value)} error={errorsMsg.email}/>
            <Input
              label="Contraseña"
              type="password"
              required={true}
              minLength={6}
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={errorsMsg.password}
            />
            <Input
              label="Confirmar contraseña"
              type="password"
              required={true}
              minLength={6}
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              error={errorsMsg.rePassword}
            />
            <div className="container-button">
              <button className="buttonPrimary" onClick={onRegister} >Crear cuenta</button>
            </div>
          </form>

        </div>
      </Body>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default Register;
