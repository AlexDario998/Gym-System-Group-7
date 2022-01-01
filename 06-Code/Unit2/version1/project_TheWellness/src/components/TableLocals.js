import React from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

const TableLocals = (props) => {

    const gyms = props.gyms

    const columns = [
        //{ field: 'id', headerName: 'ID', width: 70 },
        { field: 'namegym', headerName: 'Gimnasio', width: 200 },
        { field: 'city', headerName: 'Ciudad', width: 200 }
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

            <h1>Reporte locales</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        gyms.map(item => (
                            {
                                id: Math.random() * (1000 - 0) + 0,
                                namegym: item.namegym,
                                city: item.city
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