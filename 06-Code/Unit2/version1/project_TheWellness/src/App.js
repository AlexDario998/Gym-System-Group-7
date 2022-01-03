import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Infra from './components/formsInf';
import Systems from './components/formsSystem';
import Machine from './components/formsMach';
import TIDevice from './components/TIDeviceLayout';
import Gym from './components/LocalLayout';
import User from './components/FormUser';
import Machines from './components/machine';
import TableLocals from './components/TableLocalsLayout'
import TableTIDevices from './components/TableTIDevicesLayout'
import TableRepairTIDevicesRequests from './components/TableRepairTIDevicesRequestsLayout';

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
        <Route path="/reportLocals" element={<TableLocals />} />
        <Route path="/reportTIDevices" element={<TableTIDevices />} />
        <Route path="/TableRepairTIDevicesRequests" element={<TableRepairTIDevicesRequests />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
