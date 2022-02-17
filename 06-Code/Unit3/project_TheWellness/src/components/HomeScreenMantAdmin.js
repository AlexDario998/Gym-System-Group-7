import HomeScreen from './HomeScreen'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from './NavbarMaintenanceAdmin'
import Cookies from 'universal-cookie/es6';
import {useEffect} from 'react';

const cookies = new Cookies()

const HomeScreenMantAdmin = () => {

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '4') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box class = "bgHome">
                <NavBar />
                <br/><br/>
                <HomeScreen />
                <br/>
            </Box>
        
        </>
    )
}
export default HomeScreenMantAdmin