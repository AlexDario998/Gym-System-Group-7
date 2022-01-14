import React, { useEffect } from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import '../index.css'
import MatDescriptionTIDevicesRequests from "./MatDescriptionTIDevicesRequests";
import MatRepairRequestsComplete from "./MatRepairRequestsComplete";


const TableRepairTIDevicesRequests = (props) => {

    const reports = props.reports
    const updateRegister = props.updateRegister
    const gyms = props.gyms
    const users = props.users
    const tiDevices = props.tiDevices

    const handleUpdateRegister = (data) => {
        updateRegister(data)
    }

    const getGymById = (idGym) => {
        for (var i=0; i<gyms.length; i++) {
            if (gyms[i].id === idGym) {
                return gyms[i].namegym
            }
        }
    }

    const getTiDeviceById = (idTiDevice) => {
        for (var i=0; i<tiDevices.length; i++) {
            if (tiDevices[i].id === idTiDevice) {
                return tiDevices[i].name
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
        { field: 'user', headerName: 'Autor', width: 200 },
        { field: 'local', headerName: 'Local', width: 200 },
        { field: 'tiDevice', headerName: 'Dispositivo', width: 200 },
        { field: 'date', headerName: 'Fecha de Solicitud', width: 200 },
        {
            field: "description",
            headerName: "Descripción",
            sortable: false,
            width: 120,
            disableClickEventBubbling: true,
            renderCell: (params) => (
              <div style={{ cursor: "pointer" }}>
                <MatDescriptionTIDevicesRequests data={params.row} />
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
                <MatRepairRequestsComplete data={params.row} handleUpdateRegister={handleUpdateRegister} />
              </div>
            ),
          }
    ]
      
    return (
        <Box
            sx={{
                width: '70%',
                height: '82vh',
                marginLeft:'auto',
                marginRight:'auto',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingLeft:'20px',
                paddingRight:'20px',
                background: '#fff', 
                borderRadius: '15px',
                boxShadow: '1px 1px 20px #333'
            }}
        >

            <h1>Solicitudes de Arreglo Dispositivos TI</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        reports.map(item => (
                            {
                                id: item._id,
                                idUser: item.idUser,
                                idLocal: item.idLocal,
                                idTIDevice: item.idTIDevice,
                                date: item.date,
                                description: item.description,
                                user: getUserById(item.idUser),
                                local: getGymById(item.idLocal),
                                tiDevice: getTiDeviceById(item.idTIDevice)
                            }
                        ))
                    }
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </Box>
    );
      
    

}
export default TableRepairTIDevicesRequests