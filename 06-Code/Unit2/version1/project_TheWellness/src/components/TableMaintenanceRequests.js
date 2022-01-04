import React, { useEffect } from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

const TableMaintenanceRequests = (props) => {

    const reports = props.reports

    const columns = [
        { field: 'authorName', headerName: 'Nombre del autor', width: 200 },
        { field: 'gym', headerName: 'Local', width: 200 },
        { field: 'gymMachine', headerName: 'Maquina', width: 200 },
        { field: 'date', headerName: 'Fecha de Solicitud', width: 200 },
        { field: 'machineType', headerName: 'Tipo de Maquina', width: 200 },
        { field: 'gymZone', headerName: 'Zona del Gimnasio', width: 200 },
        { field: 'description', headerName: 'Descripción', width: 200 }
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

            <h1>Solicitudes de Arreglo de Máquinas de Gimnasio</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        reports.map(item => (
                            {
                                id: item.id,
                                authorName: item.idUser,
                                gym: item.idLocal,
                                gymMachine: item.idGymMachine,
                                date: item.date,
                                machineType: item.machineType,
                                gymZone: item.gymZone,
                                description: item.description
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
export default TableMaintenanceRequests