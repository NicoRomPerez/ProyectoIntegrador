import React, { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Body from "../../Body/Body";
import Input from "../../Commons/Input/Input";
import "./../auth.scss";

import { Link } from "react-router-dom";
const Login = () => {
  const [password, setPassword]= useState("");
  
  

  return (
    <div className="auth">
      <Header className="header"></Header>
      <Body className="container">
        <div className="card-login">
          <h1 className="tittle">Iniciar sesión</h1>
          <Input label="Correo electrónico" type="email" />
          <Input
            label="Contraseña"
            type="password"
            required={true}
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={'Contraseña invalida'}
          />
          <div className="container-button">
            <button className="buttonPrimary">Ingresar</button>
          </div>
          <span className="go-to-register">
            ¿Aún no tienes cuenta?
            <Link to={"/register"}>Registrate</Link>
          </span>
        </div>
      </Body>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default Login;
