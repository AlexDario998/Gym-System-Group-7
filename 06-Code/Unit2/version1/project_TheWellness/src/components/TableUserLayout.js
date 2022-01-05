import TableUsers from './TableUser'
import { getUsers,deleteUser,updateUser } from '../services/userAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';
import {getLocals} from '../services/localAxios'

const cookies = new Cookies()

const TableUserLayout = () => {

    const [users, setUsers] = useState([])
    const [gyms, setGyms] = useState([])

    const deleteRegister = (idUser) => {
        deleteUser(idUser)
    }

    const updateRegister = (values) => {
        updateUser(values)
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
                <TableUsers users={users} gyms={gyms} deleteRegister={deleteRegister} updateRegister={updateRegister}/>
            </Box>
        
        </>
    )
}
export default TableUserLayout