import TableLocals from '../components/TableLocals'
import {getLocals, deleteLocal, updateLocal} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableLocalsLayout = () => {

    const [gyms, setGyms] = useState([])

    const deleteRegister = (idLocal) => {
        deleteLocal(idLocal)
    }

    const updateRegister = (values) => {
        updateLocal(values)
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
                 class = "imgLocal"
            >
                <NavBar />
                <br/><br/>
                <TableLocals gyms={gyms} deleteRegister={deleteRegister} updateRegister={updateRegister} />
            </Box>
        
        </>
    )
}
export default TableLocalsLayout