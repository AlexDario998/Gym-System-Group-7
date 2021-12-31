import TableTIDevices from './TableTIDevices'
import {getTIDevices} from '../services/tiDeviceAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';

const TableTIDevicesLayout = () => {

    const [tiDevices, setTIDevices] = useState([])

    useEffect(() => {
        async function loadTIDevices() {
            const response = await getTIDevices()

            if (response.status === 200) {
                setTIDevices(response.data)
            }
        }

        loadTIDevices()
        
    }, [])

    return (
        <>
            <Box>
                <br/><br/>
                <TableTIDevices tiDevices={tiDevices}/>
            </Box>
        
        </>
    )
}
export default TableTIDevicesLayout