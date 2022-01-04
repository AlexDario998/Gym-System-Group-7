import TableTIDevices from './TableTIDevices'
import {getTIDevices, deleteTiDevice, updateTiDevice} from '../services/tiDeviceAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableTIDevicesLayout = () => {

    const [tiDevices, setTIDevices] = useState([])

    const deleteRegister = (idTiDevice) => {
        deleteTiDevice(idTiDevice)
    }

    const updateRegister = (values) => {
        updateTiDevice(values)
    }

    useEffect(() => {
        async function loadTIDevices() {
            const response = await getTIDevices()

            if (response.status === 200) {
                setTIDevices(response.data)
            }
        }

        loadTIDevices()
        
    }, [])

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box>
                <NavBar />
                <br/><br/>
                <TableTIDevices tiDevices={tiDevices} deleteRegister={deleteRegister} updateRegister={updateRegister} />
            </Box>
        
        </>
    )
}
export default TableTIDevicesLayout