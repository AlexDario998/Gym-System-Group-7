import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Infra from './pages/FormInfLayout';
import Systems from './pages/FormSystemLayout';
import Machine from './pages/FormMachLayout';
import TIDevice from './pages/TIDeviceLayout';
import Gym from './pages/LocalLayout';
import User from './pages/UserLayout';
import Machines from './pages/MachineLayout';
import HomescreenSuperAdmin from './pages/HomeScreenSuperAdminLayout';
import HomescreenLeaderGym from './pages/HomeScreenLeaderGymLayout';
import HomeScreenMantAdmin from './pages/HomeScreenMantAdmin';
import HomeScreenSystemAdmin from './pages/HomeScreenSystemAdminLayout';

import Menuopt from './pages/MenuOptLayout';
import Optsoli from './pages/OptSoliLayout';
import OptSoliLayoutAdmin from './pages/OptSoliLayoutAdmin';
import TableLocals from './pages/TableLocalsLayout'
import TableTIDevices from './pages/TableTIDevicesLayout'

import TableUsers  from './pages/TableUserLayout'

import TableGymMachines from './pages/TableMachinesLayout'

import TableRepairTIDevicesRequests from './pages/TableRepairTIDevicesRequestsLayout';
import TableMaintenanceRequests from './pages/TableMaintenanceRequestsLayout';
import TableRepairInfrastructuresRequests from './pages/TableRepairInfrastructuresRequestsLayout';
import TableMaintenanceRequestsLayoutLeader from './pages/TableMaintenanceRequestsLayoutLeader';
import TableRepairInfrastructuresRequestsLayoutLeader from './pages/TableRepairInfrastructuresRequestsLayoutLeader';
import TableRepairTIDevicesRequestsLayoutLeader from './pages/TableRepairTIDevicesRequestsLayoutLeader';
import TableMaintenanceRequestsLayoutAdmin from './pages/TableMaintenanceRequestsLayoutAdmin';
import TableRepairTIDevicesRequestsLayoutAdmin from './pages/TableRepairTIDevicesRequestsLayoutAdmin';
import TableRepairInfrastructuresRequestsLayoutAdmin from './pages/TableRepairInfrastructuresRequestsLayoutAdmin';


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
        <Route path="/optSoliAdmin" element={<OptSoliLayoutAdmin />} />
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
        <Route path="/TableRepairInfrastructuresRequestsLayoutLeader" element={<TableRepairInfrastructuresRequestsLayoutLeader />} />
        <Route path="/TableRepairTIDevicesRequestsLayoutLeader" element={<TableRepairTIDevicesRequestsLayoutLeader />} />
        <Route path="/tableMaintenanceRequestsLayoutAdmin" element={<TableMaintenanceRequestsLayoutAdmin />} />
        <Route path="/TableRepairTIDevicesRequestsLayoutAdmin" element={<TableRepairTIDevicesRequestsLayoutAdmin />} />
        <Route path="/TableRepairInfrastructuresRequestsLayoutAdmin" element={<TableRepairInfrastructuresRequestsLayoutAdmin />} />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
