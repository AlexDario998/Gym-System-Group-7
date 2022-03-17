import TableRepairInfrastructuresRequests from "../components/TableRepairInfrastructuresRequests";
import TableRepairInfrastructuresRequestsFalse from "../components/TableRepairInfrastructuresRequestsFalse";
import SelectRequest from "../components/SelectRequest";
import NumberRequests from "../components/NumberRequests";
import {
  updateConfirmation,
  updateConfirmationTrue,
  getNumberCompletedRequests,
  getNumberNoCompletedRequests,
  getReportsByState,
} from "../services/repairInfrastructuresRequestAxios";
import { getLocals } from "../services/localAxios";
import { getUsers } from "../services/userAxios";
import "../index.css";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavbarMaintenanceAdmin from "../components/NavbarMaintenanceAdmin";
import Cookies from "universal-cookie/es6";
import BreadcrumbsMantAdmin from "../components/BreadcrumbsMantAdmin";

const cookies = new Cookies();

const TableRepairInfrastructuresRequestsLayout = () => {
  const [confirmation, setConfirmation] = useState({
    state: true,
  });
  const [numberCompletedRequests, setNumberCompletedRequests] = useState({
    completedRequests: 0,
  });
  const [numberNoCompletedRequests, setNumberNoCompletedRequests] = useState({
    noCompletedRequests: 0,
  });
  const [reports, setReports] = useState([]);
  const [reportsFalse, setReportsFalse] = useState([]);
  const [gyms, setGyms] = useState([]);
  const [users, setUsers] = useState([]);

  const updateRegister = (data) => {
    updateConfirmation(data);
  };
  const updateRegisterTrue = (data) => {
    updateConfirmationTrue(data);
  };

  useEffect(() => {
    async function loadReports() {
      const response = await getReportsByState(confirmation.state);

      if ((response.status === 200) & (confirmation.state === true)) {
        setReports(response.data);
      }
      console.log(reports);
    }

    loadReports();
  }, [confirmation]);

  useEffect(() => {
    async function loadReportsFalse() {
      const response = await getReportsByState(confirmation.state);

      if ((response.status === 200) & (confirmation.state === false)) {
        setReportsFalse(response.data);
      }
      console.log(reports);
    }

    loadReportsFalse();
  }, [confirmation]);

  useEffect(() => {
    async function loadNumberRequests() {
      const responseCompleted = await getNumberCompletedRequests();

      if (responseCompleted.status === 200) {
        setNumberCompletedRequests({
          ...numberCompletedRequests,
          completedRequests: responseCompleted.data,
        });
      }
    }

    loadNumberRequests();
  }, [confirmation]);

  useEffect(() => {
    async function loadNumberRequests() {
      const responseNoCompleted = await getNumberNoCompletedRequests();

      if (responseNoCompleted.status === 200) {
        setNumberNoCompletedRequests({
          ...numberNoCompletedRequests,
          noCompletedRequests: responseNoCompleted.data,
        });
      }
    }

    loadNumberRequests();
  }, [confirmation]);

  useEffect(() => {
    async function loadGyms() {
      const response = await getLocals();

      if (response.status === 200) {
        setGyms(response.data);
      }
    }

    loadGyms();
  }, []);

  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();

      if (response.status === 200) {
        setUsers(response.data);
      }
    }

    loadUsers();
  }, []);

  useEffect(() => {
    if (
      typeof cookies.get("userName") === "undefined" ||
      cookies.get("type", { path: "/" }) !== "4"
    ) {
      window.location.href = "./";
    }
  });

  if (confirmation.state === true) {
    return (
      <>
        <Box class="boxInfra">
          <NavbarMaintenanceAdmin />
          <BreadcrumbsMantAdmin
            breadcrumb1="Página principal"
            breadcrumb2="Solicitudes de Arreglo Infraestructura"
          />
          <br />
          <br />
          <Box class="BoxMaintenance">
            <Box
              sx={{
                width: "80%",
                height: "100vh",
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "15px",
                flexDirection: "row",
                marginTop: "5%",
              }}
            >
              <SelectRequest
                confirmation={confirmation}
                setConfirmation={setConfirmation}
              />
              <NumberRequests
                completedRequests={numberCompletedRequests.completedRequests}
                noCompletedRequests={
                  numberNoCompletedRequests.noCompletedRequests
                }
              />
            </Box>

            <br />
            <br />
            <hr />
            <TableRepairInfrastructuresRequests
              reports={reports}
              updateRegister={updateRegister}
              gyms={gyms}
              users={users}
            />
            <br />
            <br />
          </Box>
          <br />
          <br />
        </Box>
      </>
    );
  }
  if (confirmation.state === false) {
    return (
      <>
        <Box class="boxInfra">
          <NavbarMaintenanceAdmin />
          <BreadcrumbsMantAdmin
            breadcrumb1="Página principal"
            breadcrumb2="Solicitudes de Arreglo Infraestructura"
          />
          <br />
          <br />
          <Box class="BoxMaintenance">
            <Box
              sx={{
                width: "80%",
                height: "100vh",
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "15px",
                flexDirection: "row",
                marginTop: "5%",
              }}
            >
              <SelectRequest
                confirmation={confirmation}
                setConfirmation={setConfirmation}
              />
              <NumberRequests
                completedRequests={numberCompletedRequests.completedRequests}
                noCompletedRequests={
                  numberNoCompletedRequests.noCompletedRequests
                }
              />
            </Box>

            <br />
            <br />
            <hr />
            <TableRepairInfrastructuresRequestsFalse
              reports={reportsFalse}
              updateRegisterTrue={updateRegisterTrue}
              gyms={gyms}
              users={users}
            />
            <br />
            <br />
          </Box>
          <br />
          <br />
        </Box>
      </>
    );
  }
};
export default TableRepairInfrastructuresRequestsLayout;
