import React, { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Body from "../../Body/Body";
import Input from "../../Commons/Input/Input";
import "./../auth.scss";
import userInfo from'../../../users.json'
import {validateEmail,validatePassword} from '../utils.js'

import { json, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail]= useState("");
  const [userExists, setUserExist]= useState(false);
  const [password, setPassword]= useState("");
  const navigate = useNavigate()
  const [messageUser, setMessageUser]= useState("");
 

  const handleLogin = (e)=>{
    e.preventDefault()
    console.log("handle login",email,password,userInfo);
    const userExist = userInfo.some(user=>email===user.email)
    
    
    
    if(userExist){
      const correcto = userInfo.find(user=>email===user.email&&password===user.password)
      console.log("correcto",correcto);
      setMessageUser('El usuario o contraseña son incorrectos')
      setUserExist(false)
      if (correcto) {

        navigate("/home")
        localStorage.currentUser = JSON.stringify(correcto)
        setMessageUser('')
      }

    }
    if(!userExist){
      setUserExist(!userExist)
    }


  }
  
  
const handleValidateEmail =(value)=>{
  console.log("handle email",value);
  
}


  return (
    <div className="auth">
      <Header className="header"></Header>
      <Body className="container">
        <div className="card-login">
          <h1 className="tittle">Iniciar sesión</h1>
          <form onSubmit={handleLogin}>
          <Input 
           label="Correo electrónico" type="email" 
           onChange={(e) => setEmail(e.target.value)}
           required={true}
           />
           {userExists?<div className="error">Usuario no existe</div>:''}
           <div className="error">{messageUser}</div>
          <Input
            label="Contraseña"
            type="password"
            required={true}
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="container-button">
            <button className="buttonPrimary"
            type="submit"
            >Ingresar</button>
          </div>
          <span className="go-to-register">
            ¿Aún no tienes cuenta? 
            <Link to={"/register"}> Registrate</Link>
          </span>

          </form>
        </div>
      </Body>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default Login;
