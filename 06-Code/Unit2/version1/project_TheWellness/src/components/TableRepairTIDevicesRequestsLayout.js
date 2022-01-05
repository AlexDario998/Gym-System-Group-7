import TableRepairTIDevicesRequests from "./TableRepairTIDevicesRequests";
import {
  getReports,
  deleteRequest,
  getReportsByConfirmation,
  updateConfirmation,

} from "../services/repairRequestTIDevicesAxios";
import "../index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavbarSystemsAdmin from "./NavbarSystemsAdmin";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const TableRepairTIDevicesRequestsLayout = () => {
  const [reports, setReports] = useState([]);
  
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
   
        />
      </Box>
    </>
  );
};
export default TableRepairTIDevicesRequestsLayout;
