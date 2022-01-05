import TableMaintenanceRequestsLeader from './TableMaintenanceRequestsLeader'
import {getReports, getReportsByConfirmationMachines, updateConfirmation} from '../services/maintenanceRequestsAxios.js'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavbarLeaderGym from './NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableMaintenanceRequestsLayoutLeader = () => {

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
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '2') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box>
                <NavbarLeaderGym/>
                <br/><br/>
                <TableMaintenanceRequestsLeader reports={reports}
                />
            </Box>
        
        </>
    )
}
export default TableMaintenanceRequestsLayoutLeader