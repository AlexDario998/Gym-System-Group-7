import TableMachines from './TableMachines'
import {getGymMachines,deleteGymMachine,updateGymMachine} from '../services/gymMachineAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableMachinesLayout = () => {

    const [gymMachines, setGymMachines] = useState([])

    const deleteRegister = (idGymMachines) => {
        deleteGymMachine(idGymMachines)
    }

    const updateRegister = (values) => {
        updateGymMachine(values)
    }

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
        if (typeof cookies.get('userName') === 'undefined') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box>
                <NavBar />
                <br/><br/>
                <TableMachines gymMachines={gymMachines} deleteRegister={deleteRegister} updateRegister={updateRegister} />
            </Box>
        
        </>
    )
}
export default TableMachinesLayout