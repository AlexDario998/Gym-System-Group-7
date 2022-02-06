import React, { useState } from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import '../index.css'
import MatEditLocal from './MatEditLocal'
import MatDelete from './MatDelete'

const TableLocals = (props) => {

    const gyms = props.gyms
    const deleteRegister = props.deleteRegister
    const updateRegister = props.updateRegister

    const handleDeleteRegister = (idLocal) => {
        deleteRegister(idLocal)
    }

    const handleUpdateRegister = (values) => {
        updateRegister(values)
    }

    const columns = [
        { field: 'namegym', headerName: 'Gimnasio', width: 200 },
        { field: 'city', headerName: 'Ciudad', width: 200 },
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
                    <MatEditLocal data={params.row} handleUpdateRegister={handleUpdateRegister} />
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
                        gyms.map(item => (
                            {
                                id: item._id,
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