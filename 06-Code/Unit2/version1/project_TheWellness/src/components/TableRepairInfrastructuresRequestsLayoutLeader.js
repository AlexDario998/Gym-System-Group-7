import TableRepairInfrastructuresRequestsLeader from "./TableRepairInfrastructuresRequestsLeader";
import {
  getReports,
  getReportsByConfirmation,
  updateConfirmation,
} from "../services/repairInfrastructuresRequestAxios";
import "../index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie/es6";
import NavBarLeaderGym from "./NavBarLeaderGym";

const cookies = new Cookies();

const TableRepairInfrastructuresRequestsLayoutLeader = () => {
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
    if (typeof cookies.get("userName") === "undefined") {
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
        />
      </Box>
    </>
  );
};
export default TableRepairInfrastructuresRequestsLayoutLeader;
