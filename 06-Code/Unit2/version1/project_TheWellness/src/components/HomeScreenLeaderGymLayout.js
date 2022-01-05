import HomeScreen from './HomeScreen'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from './NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect} from 'react';

const cookies = new Cookies()

const HomeScreenLeaderGymLayout = () => {

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined') {
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
export default HomeScreenLeaderGymLayout