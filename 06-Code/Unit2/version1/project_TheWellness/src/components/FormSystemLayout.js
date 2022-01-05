import FormsSystem from './FormsSystem'
import {getLocals} from '../services/localAxios'
import {saveRsystems} from '../services/repairRequestTIDevicesAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from './NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()

const FormSystemLayout = () => {

    const [gyms, setGyms] = useState([])
    const [formSystemValues, setFormSystemValues] = useState({
        id:'',
        idUser: '',
        idLocal: '',
        idTIDevice: '',
        date:'',
        machineType:'',
        description: ''
    })

    const handleSubmit = (data) => {
        saveRsystems(data,formSystemValues,setFormSystemValues)
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
                <FormsSystem handleSubmit={handleSubmit} gyms={gyms} formSystemValues={formSystemValues} setFormSystemValues={setFormSystemValues} />
                {/* <br/> */}
            </Box>
        
        </>
    )
}
export default FormSystemLayout