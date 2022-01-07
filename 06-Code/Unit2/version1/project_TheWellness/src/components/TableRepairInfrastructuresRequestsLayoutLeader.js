import TableRepairInfrastructuresRequestsLeader from "./TableRepairInfrastructuresRequestsLeader";
import {
  getReports,
  getReportsByConfirmation,
  updateConfirmation,
} from "../services/repairInfrastructuresRequestAxios";
import {getLocals} from '../services/localAxios'
import { getUsers} from '../services/userAxios'
import "../index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie/es6";
import NavBarLeaderGym from "./NavBarLeaderGym";

const cookies = new Cookies();

const TableRepairInfrastructuresRequestsLayoutLeader = () => {
  const [reports, setReports] = useState([]);
  const [gyms, setGyms] = useState([])
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
        <TableRepairInfrastructuresRequestsLeader
          reports={reports}
          gyms={gyms} users={users}
        />
      </Box>
    </>
  );
};
export default TableRepairInfrastructuresRequestsLayoutLeader;
