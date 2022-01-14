import React from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

const TableRepairMachine = (props) => {

    const rmachine = props.rmachine
    const gyms = props.gyms
    const users = props.users
    const gymMachines = props.gymMachines
    console.log(rmachine)

    const getGymById = (idGym) => {
        for (var i=0; i<gyms.length; i++) {
            if (gyms[i].id === idGym) {
                return gyms[i].namegym
            }
        }
    }

    const getGymMachineById = (idGymMachine) => {
        for (var i=0; i<gymMachines.length; i++) {
            if (gymMachines[i].id === idGymMachine) {
                return gymMachines[i].name
            }
        }
    }

    const getUserById = (idUser) => {
        for (var i=0; i<users.length; i++) {
            if (users[i]._id === idUser) {
                return users[i].name + users[i].lastName
            }
        }
    }

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
                        rmachine.map(item => (
                            {
                                id: item.id,
                                idUser: item.idUser,
                                idLocal: item.idLocal,
                                idGymMachine: item.idGymMachine,
                                date: item.date,
                                description: item.description,
                                user: getUserById(autor),
                                nameGymMachine: getGymMachineById(serial)
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