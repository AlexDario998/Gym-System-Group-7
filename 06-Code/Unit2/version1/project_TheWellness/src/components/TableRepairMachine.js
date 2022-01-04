import React from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

const TableRepairMachine = (props) => {

    const repMachine = props.repMachine

    const columns = [
        //{ field: 'id', headerName: 'ID', width: 70 },
        { field: 'autor', headerName: 'Autor Solicitud', width: 200 },
        { field: 'local', headerName: 'Local', width: 200 },
        { field: 'serial', headerName: 'Local', width: 200 },
        { field: 'date', headerName: 'Fecha', width: 200 },
        { field: 'description', headerName: 'Descripcion', width: 200 }
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

            <h1>Reporte Reparaciones Maquinas</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        repMachine.map(item => (
                            {
                                id: Math.random() * (1000 - 0) + 0,
                                autor: item.autor,
                                local: item.local,
                                serial: item.brand,
                                date: item.date,
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
export default TableRepairMachine