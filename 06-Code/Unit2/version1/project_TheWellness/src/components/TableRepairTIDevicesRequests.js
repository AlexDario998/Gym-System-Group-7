import React, { useEffect } from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import '../index.css'

import MatDelete from './MatDelete'


const TableRepairTIDevicesRequests = (props) => {

    const reports = props.reports
    const deleteRegister = props.deleteRegister

    const handleDeleteRegister = (idRequest) => {
        deleteRegister(idRequest)
    }


    const columns = [
        { field: 'idUser', headerName: 'Autor', width: 200 },
        { field: 'idLocal', headerName: 'Local', width: 200 },
        { field: 'device', headerName: 'Dispositivo', width: 200 },
        { field: 'date', headerName: 'Fecha de Solicitud', width: 200 },
        { 
            field: 'actions', 
            headerName: 'Acciones',
            sortable: false,
            width: 200,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <div
                    style={{ cursor: "pointer" }}
                >
                    <MatDelete index={params.row.id} handleDeleteRegister={handleDeleteRegister} />
                </div>
            )
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
                                id: item.id,
                                authorName: item.idUser,
                                gym: item.idLocal,
                                device: item.idTIDevice,
                                date: item.date,
                                description: item.description,
                                confirmation: item.confirmation
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