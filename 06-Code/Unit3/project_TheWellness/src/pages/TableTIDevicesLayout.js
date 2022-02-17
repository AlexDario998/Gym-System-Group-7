import TableTIDevices from '../components/TableTIDevices'
import {getTIDevices, deleteTiDevice, updateTiDevice} from '../services/tiDeviceAxios'
import {getLocals} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableTIDevicesLayout = () => {

    const [tiDevices, setTIDevices] = useState([])
    const [gyms, setGyms] = useState([])

    const deleteRegister = (idTiDevice) => {
        deleteTiDevice(idTiDevice)
    }

    const updateRegister = (values) => {
        updateTiDevice(values)
    }

    useEffect(() => {
        async function loadGyms() {
            const response = await getLocals()

            if (response.status === 200) {
                setGyms(response.data)
                
            }
        }

        loadGyms()
        
    }, [])

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
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '1') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
            class = "imgTIDevice">
                <NavBar />
                <br/><br/>
                <TableTIDevices tiDevices={tiDevices} gyms={gyms} deleteRegister={deleteRegister} updateRegister={updateRegister} />
            </Box>
        
        </>
    )
}
export default TableTIDevicesLayout