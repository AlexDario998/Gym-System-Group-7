import React from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

const TableLocals = (props) => {

    const tiDevices = props.tiDevices

    const columns = [
        //{ field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Equipo infórmatico', width: 200 },
        { field: 'serialNumber', headerName: 'Serial', width: 200 },
        { field: 'brand', headerName: 'Marca', width: 200 },
        { field: 'local', headerName: 'Gimnasio', width: 200 },
        { field: 'owner', headerName: 'Responsable', width: 200 }
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

            <h1>Reporte equipos informáticos</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        tiDevices.map(item => (
                            {
                                id: Math.random() * (1000 - 0) + 0,
                                name: item.name,
                                serialNumber: item.serialNumber,
                                brand: item.brand,
                                local: item.local,
                                owner: item.owner
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
export default TableLocals