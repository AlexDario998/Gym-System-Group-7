import TableRmachine from '../components/TableRepairMachine'
import { getRmachine} from '../services/rMachineAxios'
import { getGymMachines} from '../services/gymMachineAxios'
import { getUsers} from '../services/userAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableRMachineLayout = () => {

    const [rmachine, setRmachine] = useState([])
    const [gyms, setGyms] = useState([])
    const [gymMachines, setGymMachines] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadRmachine() {
            const response = await getRmachine()

            if (response.status === 200) {
                setRmachine(response.data)
            }
        }

        loadRmachine()
        
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
        if (typeof cookies.get('userName') === 'undefined') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box>
                <NavBar />
                <br/><br/>
                <TableRmachine rmachine={rmachine} gyms={gyms} users={users} gymMachines={gymMachines} />
            </Box>
        
        </>
    )
}
export default TableRMachineLayout