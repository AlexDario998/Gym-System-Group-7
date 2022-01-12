import TableMachines from './TableMachines'
import {getGymMachines,deleteGymMachine,updateGymMachine} from '../services/gymMachineAxios'
import {getLocals} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableMachinesLayout = () => {

    const [gymMachines, setGymMachines] = useState([])
    const [gyms, setGyms] = useState([])

    const deleteRegister = (idGymMachines) => {
        deleteGymMachine(idGymMachines)
    }

    const updateRegister = (values) => {
        updateGymMachine(values)
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
        async function loadGymMachines() {
            const response = await getGymMachines()

            if (response.status === 200) {
                setGymMachines(response.data)
            }
        }

        loadGymMachines()
        
    }, [])

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '1') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
             class = "imgMachine">
                <NavBar />
                <br/><br/>
                <TableMachines gymMachines={gymMachines} gyms={gyms} deleteRegister={deleteRegister} updateRegister={updateRegister} />
            </Box>
        
        </>
    )
}
export default TableMachinesLayout