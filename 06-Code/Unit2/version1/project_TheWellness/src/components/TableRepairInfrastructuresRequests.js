import EditIcon from "@mui/icons-material/Edit";
import {
  IconButton,
  Modal,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import MatDescriptionInfrastructuresRequests from "./MatDescriptionInfrastructuresRequests";
import MatRepairInfrastructureComplete from "./MatRepairInfrastructureComplete";

const TableRepairInfrastructuresRequests = (props) => {
  const reports = props.reports;
  const updateRegister = props.updateRegister

  const handleUpdateRegister = (data) => {
    updateRegister(data)
}
  const columns = [
    { field: "idUser", headerName: "Nombre del autor", width: 200 },
    { field: "idLocal", headerName: "Local", width: 200 },
    { field: "date", headerName: "Fecha de Solicitud", width: 200 },
    {
      field: "description",
      headerName: "Descripción",
      sortable: false,
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <div style={{ cursor: "pointer" }}>
          <MatDescriptionInfrastructuresRequests data={params.row} />
        </div>
      ),
    },
    {
      field: "confirmation",
      headerName: "Confirmación",
      sortable: false,
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <div style={{ cursor: "pointer" }}>
          <MatRepairInfrastructureComplete data={params.row} handleUpdateRegister={handleUpdateRegister} />
        </div>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "70%",
        height: "82vh",
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
      <h1>Solicitudes de Arreglo Infraestructura</h1>
      <br />

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
        
          rows={reports.map((item) => ({
            id: item.id,
            idUser: item.idUser,
            idLocal: item.idLocal,
            date: item.date,
            description: item.description
          }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Box>
  );
};
export default TableRepairInfrastructuresRequests;
