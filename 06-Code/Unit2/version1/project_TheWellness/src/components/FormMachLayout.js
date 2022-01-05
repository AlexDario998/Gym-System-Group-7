import FormsMach from './FormsMach'
import {getLocals} from '../services/localAxios'
import {saveRmachine} from '../services/maintenanceRequestsAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from './NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()

const FormMachLayout = () => {

    const [gyms, setGyms] = useState([])
    const [formMachValues, setFormMachValues] = useState({
        idUser: '',
        idLocal: '',
        idGymMachine: '',
        date:'',
        machineType:'',
        gymZone:'',
        description: ''
    })

    const handleSubmit = (data) => {
        saveRmachine(data,formMachValues,setFormMachValues)
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
        if (typeof cookies.get('userName') === 'undefined') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
                // class = "imgLocal"
            >
                <NavBarLeaderGym />
                {/* <br/><br/> */}
                <FormsMach handleSubmit={handleSubmit} gyms={gyms} formMachValues={formMachValues} setFormMachValues={setFormMachValues} />
                {/* <br/> */}
            </Box>
        
        </>
    )
}
export default FormMachLayout