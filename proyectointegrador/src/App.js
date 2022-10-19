import './App.css';
import { Route, Routes } from 'react-router-dom';
import ComponenteDePrueba from './Components/ComponenteDePrueba';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    
    <div className='App'>
      <Routes>
        <Route path='/Home' element={<Home/>}>
        </Route>
        <Route path='/Register' element={<Register/>}>
        </Route>
        <Route path='/Login' element={<Login/>}>
        </Route>
        <Route path='*' element={<ComponenteDePrueba/>}/>
      </Routes> 
    </div>
  );
}

export default App;
