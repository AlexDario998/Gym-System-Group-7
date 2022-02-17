import FormAddRMachine from '../components/formsMach'
import {saveRMachine} from '../services/rMachineAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()

const RMachineLayout = () => {

    const [formRepMachValues, setformRepMachValues] = useState({
        idUser: '',
        idLocal: '',
        idGymMachine:'',
        date:'',
        machineType:'',
        gymZone:'',
        description:''
    })

    const handleSubmit = (data) => {
        saveRMachine(data,formRepMachValues,setformRepMachValues)
    }

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined') {
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
                <FormAddRMachine handleSubmit={handleSubmit} formRepMachValues={formRepMachValues} setformRepMachValues={setformRepMachValues} />
                <br/>
            </Box>
        
        </>
    )
}
export default RMachineLayout