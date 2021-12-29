import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Infra from './components/formsInf';
import Systems from './components/formsSystem';
import Machine from './components/formsMach';
import TIDevice from './components/formAddTIDevice';
import Gym from './components/formAddLocal';
import User from './components/user';
import Machines from './components/machine';


const App = () => {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/infrastructure" element={<Infra />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/machines" element={<Machine />} />
        <Route path="/formAddTIDevice" element={<TIDevice />} />
        <Route path="/formAddGym" element={<Gym />} />
        <Route path="/user" element={<User />} />
        <Route path="/gymMachines" element={<Machines />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
