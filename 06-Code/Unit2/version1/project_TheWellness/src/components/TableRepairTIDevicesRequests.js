import React, { useEffect } from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

const TableFixMachinesRequests = (props) => {

    const reports = props.reports

    const columns = [
        { field: 'authorName', headerName: 'Nombre del autor', width: 200 },
        { field: 'gym', headerName: 'Local', width: 200 },
        { field: 'device', headerName: 'Dispositivo', width: 200 },
        { field: 'requestDate', headerName: 'Fecha de Solicitud', width: 200 },
        { field: 'priority', headerName: 'Prioridad', width: 200 }
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
                                gym: item.gym,
                                device: item.device,
                                requestDate: item.requestDate,
                                priority: item.priority
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