import TableRepairInfrastructuresRequests from "./TableRepairInfrastructuresRequests";
import {
  getReports, getReportsByConfirmation
} from "../services/repairInfrastructuresRequestAxios";
import "../index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavbarMaintenanceAdmin from "./NavbarMaintenanceAdmin";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const TableRepairInfrastructuresRequestsLayout = () => {
  const [reports, setReports] = useState([]);
  
  useEffect(() => {
    async function loadReports() {
      const response = await getReportsByConfirmation();

      if (response.status === 200) {
        setReports(response.data);
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
        <NavbarMaintenanceAdmin/>
        <br />
        <br />
        <TableRepairInfrastructuresRequests
          reports={reports}
        />
      </Box>
    </>
  );
};
export default TableRepairInfrastructuresRequestsLayout;
