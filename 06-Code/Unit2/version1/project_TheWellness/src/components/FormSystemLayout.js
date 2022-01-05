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
                class = "boxSystem"
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding:'1vh',
                    background: '#fff',  /* fallback for old browsers */
                    // borderRadius: '10px',
                    boxShadow: '1px 1px 20px #333',
                  }}
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