import './App.scss';
import { Route, Routes } from 'react-router-dom';
import ComponenteDePrueba from './Components/ComponenteDePrueba';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';
import React, { useState } from 'react';

function App() {
  const [logueado,setLog] = useState(false);

  return (
    
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Home log={logueado}/>}>
        </Route>
        <Route path='/register' element={<Register/>}>
        </Route>
        <Route path='/login' element={<Login/>}>
        </Route>
        <Route path='*' element={<ComponenteDePrueba/>}/>
      </Routes> 
    </div>
  );
}

export default App;
