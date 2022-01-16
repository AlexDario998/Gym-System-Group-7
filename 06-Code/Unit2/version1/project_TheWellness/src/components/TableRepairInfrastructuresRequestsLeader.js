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

const TableRepairInfrastructuresRequestsLeader = (props) => {
  const reports = props.reports;
  const gyms = props.gyms
  const users = props.users
  const confirmation = props.confirmation
 
  const getGymById = (idGym) => {
    for (var i=0; i<gyms.length; i++) {
        if (gyms[i].id === idGym) {
            return gyms[i].namegym
        }
    }
}

const getUserById = (idUser) => {
    for (var i=0; i<users.length; i++) {
        if (users[i]._id === idUser) {
            return users[i].name + ' ' + users[i].lastName
        }
    }
}

  const columns = [
    { field: "user", headerName: "Nombre del autor", width: 200 },
    { field: "local", headerName: "Local", width: 200 },
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
    }
  ];

  return (
    <Box
      sx={{
        width: "90%",
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
        borderRadius: "15px"
      }}
    >
      <h1>Solicitudes de Arreglo Infraestructura</h1>
      <br />

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
        
          rows={reports.map((item) => ({
            id: item._id,
            idUser: item.idUser,
            idLocal: item.idLocal,
            date: item.date,
            description: item.description,
            user: getUserById(item.idUser),
            local: getGymById(item.idLocal)
          }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Box>
  );
};
export default TableRepairInfrastructuresRequestsLeader;
