import React, { useState } from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import '../index.css'
import MatEditGymMachine from './MatEditGymMachine'
import MatDelete from './MatDelete'

const TableMachines = (props) => {

    const gymMachines = props.gymMachines
    const gyms = props.gyms
    const deleteRegister = props.deleteRegister
    const updateRegister = props.updateRegister

    const handleDeleteRegister = (idMachine) => {
        deleteRegister(idMachine)
    }

    const handleUpdateRegister = (values) => {
        updateRegister(values)
    }

    const columns = [
        { field: 'name', headerName: 'Máquina', width: 200 },
        { field: 'gym', headerName: 'Gimnasio', width: 200 },
        { field: 'serialNumber', headerName: 'Número serial', width: 200 },
        { field: 'mark', headerName: 'Marca', width: 200 },
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
                    <MatEditGymMachine data={params.row} gyms={gyms} handleUpdateRegister={handleUpdateRegister} />
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

            <h1>Reporte máquinas de gimnasio</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        gymMachines.map(item => (
                            {
                                id: item.id,
                                name: item.name,
                                gym: item.gym,
                                serialNumber: item.serialNumber,
                                mark: item.mark,
                                zone: item.zone
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