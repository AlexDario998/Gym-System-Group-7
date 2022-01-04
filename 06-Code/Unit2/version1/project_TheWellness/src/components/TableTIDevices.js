import React from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import MatDelete from './MatDelete'
import MatEditTiDevice from './MatEditTiDevice';

const TableTIDevices = (props) => {

    const tiDevices = props.tiDevices
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
        { field: 'name', headerName: 'Equipo infórmatico', width: 200 },
        { field: 'serialNumber', headerName: 'Serial', width: 200 },
        { field: 'brand', headerName: 'Marca', width: 200 },
        { field: 'local', headerName: 'Gimnasio', width: 200 },
        { field: 'owner', headerName: 'Responsable', width: 200 },
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
                    <MatEditTiDevice data={params.row} handleUpdateRegister={handleUpdateRegister} gyms={gyms} />
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

            <h1>Reporte equipos informáticos</h1><br/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows=
                    {
                        tiDevices.map(item => (
                            {
                                id: item.id,
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
export default TableTIDevices