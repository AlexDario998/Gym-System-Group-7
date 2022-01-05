import React, {useEffect, useState} from 'react';
import {saveGymMachine} from '../services/gymMachineAxios'
import '../index.css';
import {Box} from "@mui/material"
import { getLocals } from '../services/localAxios';
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';
import FormMachine from './FormMachine';

const cookies = new Cookies()

const MachineLayout = () => {
    const [gyms, setGyms] = useState([])

    const [values, setValues] = useState({
        name: '',
        gym: '',
        serialNumber: '',
        mark: '',
        zone: ''
    })

    const handleSubmit = (data) => {
        saveGymMachine(data,values,setValues)
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
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '1') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
                class = "imgMachine"
            >
                <NavBar />
                <br/><br/>
                <FormMachine handleSubmit={handleSubmit} gyms={gyms} values={values} setValues={setValues} />
                <br/>
            </Box>
        
        </>
    )
}
export default MachineLayout