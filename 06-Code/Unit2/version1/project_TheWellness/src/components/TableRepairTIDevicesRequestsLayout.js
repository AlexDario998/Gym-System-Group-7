import TableRepairTIDevicesRequests from "./TableRepairTIDevicesRequests";
import {
  getReports,
  deleteRequest,
  getReportsByConfirmation,
  updateConfirmation,

} from "../services/repairRequestTIDevicesAxios";
import {getLocals} from '../services/localAxios'
import { getTIDevices} from '../services/tiDeviceAxios'
import { getUsers} from '../services/userAxios'
import "../index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavbarSystemsAdmin from "./NavbarSystemsAdmin";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const TableRepairTIDevicesRequestsLayout = () => {

  const [reports, setReports] = useState([]);
  const [gyms, setGyms] = useState([])
  const [tiDevices, setTiDevices] = useState([])
  const [users, setUsers] = useState([])

  const updateRegister = (data) => {
    updateConfirmation(data);

  };


  useEffect(() => {
    async function loadReports() {
      const response = await getReports();
      const data = await getReportsByConfirmation();
      setReports(data);
    }

    loadReports();
  }, []);

  useEffect(() => {
    async function loadGyms() {
        const response = await getLocals()

        if (response.status === 200) {
            setGyms(response.data)
            
        }
    }

    loadGyms()
    
  }, [])

  useEffect(() => {
      async function loadTiDevices() {
          const response = await getTIDevices()

          if (response.status === 200) {
              setTiDevices(response.data)
              
          }
      }

      loadTiDevices()
      
  }, [])

  useEffect(() => {
      async function loadUsers() {
          const response = await getUsers()

          if (response.status === 200) {
              setUsers(response.data)
              
          }
      }

      loadUsers()
      
  }, [])

  useEffect(() => {
    if (typeof cookies.get("userName") === "undefined" || cookies.get('type', {path: "/"}) !== '3') {
      window.location.href = "./";
    }
  });

  return (
    <>
      <Box>
        <NavbarSystemsAdmin />
        <br />
        <br />
        <TableRepairTIDevicesRequests
          reports={reports}
          updateRegister={updateRegister}
          gyms={gyms} users={users} tiDevices={tiDevices}
   
        />
      </Box>
    </>
  );
};
export default TableRepairTIDevicesRequestsLayout;
