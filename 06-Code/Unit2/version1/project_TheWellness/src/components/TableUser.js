import React from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import MatDelete from './MatDelete'
import MatEditUser from './MatEditUser';

const TableUsers = (props) => {

    const users = props.users
    const gyms = props.gyms
    const updateRegister = props.updateRegister
    const deleteRegister = props.deleteRegister

    const handleDeleteRegister = (idTiDevice) => {
        deleteRegister(idTiDevice)
    }

    const handleUpdateRegister = (values) => {
        updateRegister(values)
    }

    const columns = [
        
        { field: 'idCard', headerName: 'Cédula', width: 200 },
        { field: 'name', headerName: 'Nombre', width: 200 },
        { field: 'lastName', headerName: 'Apellidos', width: 200 },
        { field: 'email', headerName: 'Correo', width: 200 },
        { field: 'userName', headerName: 'Usuario', width: 200 },
        { field: 'type', headerName: 'Tipo de usuario', width: 200 },
        { field: 'gym', headerName: 'Local Asignado', width: 200 },
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
                    <MatEditUser data={params.row} handleUpdateRegister={handleUpdateRegister} gyms={gyms} />
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

            <h1>Reporte de Usuarios</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        users.map(item => (
                            {
                                id: item.id,
                                name: item.name,
                                lastName: item.lastName,
                                idCard: item.idCard,
                                email: item.email,
                                userName: item.userName,
                                password: item.password,
                                type:item.type,
                                gym:item.gym

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