import React, {useEffect, useState} from 'react';
import FormAddTIDevice from '../components/FormAddTIDevice'
import {saveTIDevice} from '../services/tiDeviceAxios'
import '../index.css';
import {Box} from "@mui/material"
import { getLocals } from '../services/localAxios';
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';
import ModalDataRegistered from '../components/ModalDataRegistered';

const cookies = new Cookies()

const TIDeviceLayout = () => {
    const [gyms, setGyms] = useState([])

    const [values, setValues] = useState({
        name: '',
        serialNumber: '',
        brand: '',
        local: '',
        owner: ''
    })

    const [modal, setModal] = useState(false)

    async function handleSubmit(data) {
        const response = await saveTIDevice(data,values,setValues)

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
                class = "imgTIDevice"
            >
                <NavBar />
                <br/><br/>
                <FormAddTIDevice handleSubmit={handleSubmit} gyms={gyms} values={values} setValues={setValues}/>
                <br/>
                <ModalDataRegistered modal={modal} setModal={setModal} message="Datos registrados correctamente" />
            </Box>
        
        </>
    )
}
export default TIDeviceLayout