import HomeScreen from '../components/HomeScreenMA'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from '../components/NavbarMaintenanceAdmin'
import Cookies from 'universal-cookie/es6';
import {useEffect} from 'react';
import BreadcrumbsHomeScreen from '../components/BreadcrumbsHomeScreen'

const cookies = new Cookies()

const HomeScreenMantAdmin = () => {

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '4') {
            window.location.href = "./"
        }
    })

    return (
        <>
            {/* <Box class = "bgHome"> */}
                <NavBar />
                <BreadcrumbsHomeScreen breadcrumb1="Página principal"/>
                {/* <br/><br/> */}
                <HomeScreen />
                {/* <br/> */}
            {/* </Box> */}
        
        </>
    )
}
export default HomeScreenMantAdmin