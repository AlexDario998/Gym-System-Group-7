import TableRepairTIDevicesRequests from './TableRepairTIDevicesRequests'
import {getReports} from '../services/repairRequestTIDevicesAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavbarSystemsAdmin from './NavbarSystemsAdmin'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableRepairTIDevicesRequestsLayout = () => {

    const [reports, setReports] = useState([])

    useEffect(() => {
        async function loadReports() {
            const response = await getReports()

            if (response.status === 200) {
                setReports(response.data)
            }
        }

        loadReports()
        
    }, [])

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box>
                <NavbarSystemsAdmin />
                <br/><br/>
                <TableRepairTIDevicesRequests reports={reports}/>
            </Box>
        
        </>
    )
}
export default TableRepairTIDevicesRequestsLayout