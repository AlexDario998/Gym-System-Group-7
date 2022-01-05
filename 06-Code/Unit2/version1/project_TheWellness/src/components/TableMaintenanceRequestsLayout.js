import TableMaintenanceRequests from './TableMaintenanceRequests'
import {getReports, getReportsByConfirmationMachines, updateConfirmation} from '../services/maintenanceRequestsAxios.js'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavbarMaintenanceAdmin from './NavbarMaintenanceAdmin'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableMaintenanceRequestsLayout = () => {

    const [reports, setReports] = useState([])
    const updateRegister = (data) => {
        updateConfirmation(data);
      };
    

    useEffect(() => {
        async function loadReports() {
            const data = await getReportsByConfirmationMachines();
             setReports(data);
            
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
                <NavbarMaintenanceAdmin/>
                <br/><br/>
                <TableMaintenanceRequests reports={reports}
                    updateRegister={updateRegister}
                />
            </Box>
        
        </>
    )
}
export default TableMaintenanceRequestsLayout