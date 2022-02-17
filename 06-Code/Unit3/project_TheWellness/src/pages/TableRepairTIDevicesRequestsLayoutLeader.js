import TableRepairTIDevicesRequestsLeader from "../components/TableRepairTIDevicesRequestsLeader"
import SelectRequest from "../components/SelectRequest"
import NumberRequests from "../components/NumberRequests"
import {getNumberCompletedRequests, getNumberNoCompletedRequests, getReportsByState} from "../services/repairRequestTIDevicesAxios"
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
  const [confirmation, setConfirmation] = useState({
    state: true
  })
  const [numberCompletedRequests, setNumberCompletedRequests] = useState({
    completedRequests: 0
  })
  const [numberNoCompletedRequests, setNumberNoCompletedRequests] = useState({
    noCompletedRequests: 0
  })
  const [reports, setReports] = useState([])
  const [gyms, setGyms] = useState([])
  const [tiDevices, setTiDevices] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadReports() {
      const response = await getReportsByState(confirmation.state)

      if (response.status === 200) {
          setReports(response.data)
          
      }
    }

    loadReports();
  }, [confirmation]);

  useEffect(() => {
    async function loadNumberRequests() {
      const responseCompleted = await getNumberCompletedRequests()

      if (responseCompleted.status === 200) {
        setNumberCompletedRequests({...numberCompletedRequests, completedRequests: responseCompleted.data})
      }
      
    }

    loadNumberRequests()
  }, [confirmation]);

  useEffect(() => {
    async function loadNumberRequests() {
      const responseNoCompleted = await getNumberNoCompletedRequests()

      if (responseNoCompleted.status === 200) {
        setNumberNoCompletedRequests({...numberNoCompletedRequests, noCompletedRequests: responseNoCompleted.data})
      }
    }

    loadNumberRequests()
  }, [confirmation]);

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
      <Box
        class = "boxSystemSol"
      >
        <NavBarLeaderGym />
        <br />
        <br />
        <Box
          sx={{
            width: "70%",
            height: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "20px",
            paddingRight: "20px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "1px 1px 20px #333",
          }}
        >
          <Box 
            sx={{
              width: '80%',
              //height: '40%',
              marginLeft:'auto',
              marginRight:'auto',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              paddingLeft:'20px',
              paddingRight:'20px',
              borderRadius: '15px',
              flexDirection: "row",
              marginTop:"5%",
            }}
          >
            <SelectRequest 
              confirmation={confirmation} 
              setConfirmation={setConfirmation} 
            />
            <NumberRequests 
            completedRequests={numberCompletedRequests.completedRequests} 
            noCompletedRequests={numberNoCompletedRequests.noCompletedRequests}
             />

          </Box>
       
        <br />
        <br />
        <hr />
        <TableRepairTIDevicesRequestsLeader
          reports={reports}
          gyms={gyms} users={users} tiDevices={tiDevices}
    
        />
        <br/>
        <br/>
         </Box>
         <br/>
        <br/>
      </Box>
    </>
  );
};
export default TableRepairTIDevicesRequestsLayout;
