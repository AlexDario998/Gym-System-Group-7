import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Infra from './components/FormInfLayout';
import Systems from './components/FormSystemLayout';
import Machine from './components/FormMachLayout';
import TIDevice from './components/TIDeviceLayout';
import Gym from './components/LocalLayout';
import User from './components/UserLayout';
import Machines from './components/MachineLayout';
import HomescreenSuperAdmin from './components/HomeScreenSuperAdminLayout';
import HomescreenLeaderGym from './components/HomeScreenLeaderGymLayout';
import HomeScreenMantAdmin from './components/HomeScreenMantAdmin';
import HomeScreenSystemAdmin from './components/HomeScreenSystemAdminLayout';

import Menuopt from './components/MenuOptLayout';
import Optsoli from './components/OptSoliLayout';
import TableLocals from './components/TableLocalsLayout'
import TableTIDevices from './components/TableTIDevicesLayout'

import TableUsers  from './components/TableUserLayout'

import TableGymMachines from './components/TableMachinesLayout'

import TableRepairTIDevicesRequests from './components/TableRepairTIDevicesRequestsLayout';
import TableMaintenanceRequests from './components/TableMaintenanceRequestsLayout';
import TableRepairInfrastructuresRequests from './components/TableRepairInfrastructuresRequestsLayout';
import TableMaintenanceRequestsLayoutLeader from './components/TableMaintenanceRequestsLayoutLeader';

const App = () => {

  return (
  
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/infrastructure" element={<Infra />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/machines" element={<Machine />} />
        <Route path="/homeScreenSuperAdmin" element={<HomescreenSuperAdmin />} />
        <Route path="/homeScreenLeaderGym" element={<HomescreenLeaderGym />} />
        <Route path="/homeScreenMantAdmin" element={<HomeScreenMantAdmin />} />
        <Route path="/homeScreenSystemAdmin" element={<HomeScreenSystemAdmin />} />
        <Route path="/menuOpt" element={<Menuopt />} />
        <Route path="/optSoli" element={<Optsoli />} />
        <Route path="/formAddTIDevice" element={<TIDevice />} />
        <Route path="/formAddGym" element={<Gym />} />
        <Route path="/formUser" element={<User />} />
        <Route path="/gymMachines" element={<Machines />} />
        <Route path="/reportLocals" element={<TableLocals />} />
        <Route path="/reportTIDevices" element={<TableTIDevices />} />
        <Route path="/reportGymMachines" element={<TableGymMachines />} />
        <Route path="/TableRepairTIDevicesRequests" element={<TableRepairTIDevicesRequests />} />
        <Route path="/TableMaintenanceRequests" element={<TableMaintenanceRequests />} />
        <Route path="/TableRepairInfrastructuresRequests" element={<TableRepairInfrastructuresRequests />} />
        <Route path="/reportUsers" element={<TableUsers />} />
        <Route path="/tableMaintenanceRequestsLayoutLeader" element={<TableMaintenanceRequestsLayoutLeader />} />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
