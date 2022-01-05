import FormsInf from './FormsInf'
import {getLocals} from '../services/localAxios'
import {saveRinfrastructure} from '../services/repairInfrastructuresRequestAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from './NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()

const FormInfLayout = () => {

    const [gyms, setGyms] = useState([])
    const [formInfValues, setFormInfValues] = useState({
        idUser: '',
        idLocal: '',
        date: '',
        description: ''
    })

    const handleSubmit = (data) => {
        saveRinfrastructure(data,formInfValues,setFormInfValues)
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
                class = "boxInfra"
            >
                <NavBarLeaderGym />
                <br/><br/>
                <FormsInf handleSubmit={handleSubmit} gyms={gyms} formInfValues={formInfValues} setFormInfValues={setFormInfValues} />
                <br/>
            </Box>
        
        </>
    )
}
export default FormInfLayout