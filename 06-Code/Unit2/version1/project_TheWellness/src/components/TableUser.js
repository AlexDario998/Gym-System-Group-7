import React from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

const TableUsers = (props) => {

    const users = props.users

    const columns = [
        //{ field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'Nombres', width: 200 },
        { field: 'userLastName', headerName: 'Apellidos', width: 200 },
        { field: 'userId', headerName: 'Brand', width: 200 },
        { field: 'userMail', headerName: 'Correo', width: 200 },
        { field: 'type', headerName: 'Tipo de usuario', width: 200 },
        { field: 'gym', headerName: 'Local Asignado', width: 200 }
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

            <h1>Reporte de Usuarios</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        users.map(item => (
                            {
                                id: Math.random() * (1000 - 0) + 0,
                                name: item.userName,
                                userLastName: item.userLastName,
                                userId: item.userId,
                                userMail: item.userMail,
                                userType: item.type,
                                userGym:item.gym

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
export default TableUsers