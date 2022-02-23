import React, {useEffect, useState} from 'react';
import {saveGymMachine} from '../services/gymMachineAxios'
import '../index.css';
import {Box} from "@mui/material"
import { getLocals } from '../services/localAxios';
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';
import FormMachine from '../components/FormMachine';
import ModalDataRegistered from '../components/ModalDataRegistered';

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

    const [modal, setModal] = useState(false)

    async function handleSubmit(data) {
        const response = await saveGymMachine(data,values,setValues)

        if (response.status == 200) {
            setModal(true);
            
        }
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
                <ModalDataRegistered modal={modal} setModal={setModal} message="Datos registrados correctamente" />
                
            </Box>
        
        </>
    )
}
export default MachineLayout