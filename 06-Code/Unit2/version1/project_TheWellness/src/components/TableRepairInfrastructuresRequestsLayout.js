import TableRepairInfrastructuresRequests from "./TableRepairInfrastructuresRequests";
import {
  getReports,
  getReportsByConfirmation,
  updateConfirmation,
} from "../services/repairInfrastructuresRequestAxios";
import "../index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavbarMaintenanceAdmin from "./NavbarMaintenanceAdmin";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const TableRepairInfrastructuresRequestsLayout = () => {
  const [reports, setReports] = useState([]);

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
    if (typeof cookies.get("userName") === "undefined") {
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
        />
      </Box>
    </>
  );
};
export default TableRepairInfrastructuresRequestsLayout;
