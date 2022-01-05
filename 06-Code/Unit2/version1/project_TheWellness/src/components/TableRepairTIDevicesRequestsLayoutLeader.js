import TableRepairTIDevicesRequestsLeader from "./TableRepairTIDevicesRequestsLeader";
import {
  getReports,
  deleteRequest,
  getReportsByConfirmation,
  updateConfirmation,

} from "../services/repairRequestTIDevicesAxios";
import "../index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBarLeaderGym from "./NavBarLeaderGym";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const TableRepairTIDevicesRequestsLayout = () => {
  const [reports, setReports] = useState([]);
  



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
         
   
        />
      </Box>
    </>
  );
};
export default TableRepairTIDevicesRequestsLayout;
