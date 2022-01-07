import TableMaintenanceRequestsLeader from './TableMaintenanceRequestsLeader'
import {getReports, getReportsByConfirmationMachines, updateConfirmation} from '../services/maintenanceRequestsAxios.js'
import {getLocals} from '../services/localAxios'
import { getGymMachines} from '../services/gymMachineAxios'
import { getUsers} from '../services/userAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavbarLeaderGym from './NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableMaintenanceRequestsLayoutLeader = () => {

    const [reports, setReports] = useState([])
    const [gyms, setGyms] = useState([])
    const [gymMachines, setGymMachines] = useState([])
    const [users, setUsers] = useState([])
 
    

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
        async function loadGyms() {
            const response = await getLocals()

            if (response.status === 200) {
                setGyms(response.data)
                
            }
        }

        loadGyms()
        
    }, [])

    useEffect(() => {
        async function loadGymMachines() {
            const response = await getGymMachines()

            if (response.status === 200) {
                setGymMachines(response.data)
                
            }
        }

        loadGymMachines()
        
    }, [])

    useEffect(() => {
        async function loadUsers() {
            const response = await getUsers()

            if (response.status === 200) {
                setUsers(response.data)
                
            }
        }

        loadUsers()
        
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
                gyms={gyms} users={users} gymMachines={gymMachines}
                />
            </Box>
        
        </>
    )
}
export default TableMaintenanceRequestsLayoutLeader