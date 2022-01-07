import TableRepairInfrastructuresRequests from "./TableRepairInfrastructuresRequests";
import {
  getReports,
  getReportsByConfirmation,
  updateConfirmation,
} from "../services/repairInfrastructuresRequestAxios"
import {getLocals} from '../services/localAxios'
import { getUsers} from '../services/userAxios'
import "../index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavbarMaintenanceAdmin from "./NavbarMaintenanceAdmin";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const TableRepairInfrastructuresRequestsLayout = () => {

  const [reports, setReports] = useState([])
  const [gyms, setGyms] = useState([])
  const [users, setUsers] = useState([])

  const updateRegister = (data) => {
    updateConfirmation(data);
  };

  useEffect(() => {
    async function loadReports() {
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
      async function loadUsers() {
          const response = await getUsers()

          if (response.status === 200) {
              setUsers(response.data)
              
          }
      }

      loadUsers()
      
  }, [])

  useEffect(() => {
    if (typeof cookies.get("userName") === "undefined" || cookies.get('type', {path: "/"}) !== '4') {
      window.location.href = "./";
    }
  });

  return (
    <>
      <Box>
        <NavbarMaintenanceAdmin />
        <br />
        <br />
        <TableRepairInfrastructuresRequests
          reports={reports}
          updateRegister={updateRegister}
          gyms={gyms} users={users}
        />
      </Box>
    </>
  );
};
export default TableRepairInfrastructuresRequestsLayout;
