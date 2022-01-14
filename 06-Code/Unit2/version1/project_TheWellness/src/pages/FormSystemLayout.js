import FormsSystem from '../components/FormsSystem'
import {getLocals} from '../services/localAxios'
import {getTiDevicesByIdLocal} from '../services/tiDeviceAxios'
import {saveRsystems} from '../services/repairRequestTIDevicesAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from '../components/NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const dateComplete = day + '/' + month + '/' + year

const FormSystemLayout = () => {
    
    const [gyms, setGyms] = useState([])
    const [tiDeviceValues, setTiDeviceValues] = useState([])
    const [formSystemValues, setFormSystemValues] = useState({
        idUser: cookies.get('id', {path: "/"}),
        idLocal: '',
        idTIDevice: '',
        date: dateComplete,
        description: '',
        confirmation: true
    })

    const handleSubmit = (data) => {
        saveRsystems(data,formSystemValues,setFormSystemValues)
    }

    useEffect(() => {
        async function loadTiDevicesByIdLocal() {
            const tiDevices = await getTiDevicesByIdLocal(formSystemValues.idLocal)
            setTiDeviceValues(tiDevices)
        }
        loadTiDevicesByIdLocal()
    }, [formSystemValues.idLocal])

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
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '2') {
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
                <FormsSystem handleSubmit={handleSubmit} tiDeviceValues={tiDeviceValues} gyms={gyms} formSystemValues={formSystemValues} setFormSystemValues={setFormSystemValues} />
                {/* <br/> */}
            </Box>
        
        </>
    )
}
export default FormSystemLayout