import React, { useState } from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import '../index.css'
import MatEdit from './MatEdit'
import MatDelete from './MatDelete'

const TableMachines = (props) => {

    const machines = props.machines
    const deleteRegister = props.deleteRegister

    const handleDeleteRegister = (idMachine) => {
        deleteRegister(idMachine)
    }

    const columns = [
        { field: 'machineName', headerName: 'Nombre de la máquina', width: 200 },
        { field: 'machineBrand', headerName: 'Marca', width: 200 },
        { field: 'machineSerial', headerName: 'Número de serie', width: 200 },
        { field: 'gym', headerName: 'Gimnasio', width: 200 },
        { field: 'zone', headerName: 'Zona del gimnasio', width: 200 },
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
                    <MatEdit index={params.row.id} />
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

            <h1>Reporte locales</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        machines.map(item => (
                            {
                                id: item.id,
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
export default TableMachines