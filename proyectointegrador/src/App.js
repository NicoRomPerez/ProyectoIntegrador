import './App.scss';
import { Route, Routes } from 'react-router-dom';
import ComponenteDePrueba from './Components/ComponenteDePrueba';
import Register from './Components/Auth/Register/Register';
import Home from './Components/Home';
import Login from './Components/Auth/Login/Login';

function App() {
  return (
    
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Home/>}>
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
