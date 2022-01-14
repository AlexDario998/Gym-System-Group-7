import TableRepairTIDevicesRequestsLeader from "../components/TableRepairTIDevicesRequestsLeader";
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
import NavBarLeaderGym from "../components/NavBarLeaderGym";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const TableRepairTIDevicesRequestsLayout = () => {
  const [reports, setReports] = useState([]);
  const [gyms, setGyms] = useState([])
  const [tiDevices, setTiDevices] = useState([])
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    async function loadReports() {
      const response = await getReports()

      if (response.status === 200) {
          setReports(response.data)
          
      }
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
    if (typeof cookies.get("userName") === "undefined" || cookies.get('type', {path: "/"}) !== '2') {
      window.location.href = "./";
    }
  });

  return (
    <>
      <Box>
        <NavBarLeaderGym />
        <br />
        <br />
        <TableRepairTIDevicesRequestsLeader
          reports={reports}
          gyms={gyms} users={users} tiDevices={tiDevices}
   
        />
      </Box>
    </>
  );
};
export default TableRepairTIDevicesRequestsLayout;
