import TableUsers from './TableUser'
import { getUsers} from '../services/userAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableUserLayout = () => {

    const [users, setUsers] = useState([])

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
                <TableUsers users={users}/>
            </Box>
        
        </>
    )
}
export default TableUserLayout