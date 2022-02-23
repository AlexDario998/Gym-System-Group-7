import FormsSystem from '../components/FormsSystem'
import {getLocals, getLocalById} from '../services/localAxios'
import {getUserById} from '../services/userAxios'
import {getTIDeviceById, getTiDevicesByIdLocal} from '../services/tiDeviceAxios'
import {saveRsystems} from '../services/repairRequestTIDevicesAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from '../components/NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';
import ModalDataRegistered from '../components/ModalDataRegistered';
import BreadcrumbsLeaderThreeLayers1 from '../components/BreadcrumbsLeaderThreeLayers1'

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
        confirmation: true,
        fullNameUser: '',
        emailUser: '',
        passwordUser: '',
        nameLocal: '',
        city: '',
        tiDevice: '',
        tiDeviceSerialNumber: ''
        
    })
    console.log(formSystemValues)
    const [modal, setModal] = useState(false)

    async function handleSubmit(data) {
        const response = await saveRsystems(data,formSystemValues,setFormSystemValues)

        if (response.status == 200) {
            setModal(true);
            
        }
    }

    useEffect(() => {
        async function loadUserById() {
            const response = await getUserById(cookies.get('id', {path: "/"}))
            const user = response.data.name + ' ' + response.data.lastName

            if (response.status === 200) {
                setFormSystemValues(
                    {
                        idUser: cookies.get('id', {path: "/"}),
                        idLocal: '',
                        idTIDevice: '',
                        date: dateComplete,
                        description: '',
                        confirmation: true,
                        fullNameUser: user,
                        emailUser: response.data.email,
                        passwordUser: response.data.password,
                        nameLocal: '',
                        city: '',
                        tiDevice: '',
                        tiDeviceSerialNumber: ''
                    }
                )
            }
        }

        loadUserById()
        
    }, [formSystemValues.fullNameUser])

    useEffect(() => {
        async function loadLocalById() {
            const response = await getLocalById(formSystemValues.idLocal)

            if (response.status === 200) {
                setFormSystemValues({...formSystemValues, nameLocal: response.data.namegym, city: response.data.city})
            }
        }

        loadLocalById()
        
    }, [formSystemValues.idLocal])

    useEffect(() => {
        async function loadTiDeviceById() {
            const response = await getTIDeviceById(formSystemValues.idTIDevice)

            if (response.status === 200) {
                setFormSystemValues({...formSystemValues, tiDevice: response.data.name, tiDeviceSerialNumber: response.data.serialNumber})
            }
        }

        loadTiDeviceById()
        
    }, [formSystemValues.idTIDevice])

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
                <BreadcrumbsLeaderThreeLayers1 breadcrumb1="Página principal" breadcrumb2="Crear Solicitudes" breadcrumb3= "Sistemas/Dispositivos TI Solicitud de Arreglo"/>
                {/* <br/><br/> */}
                <FormsSystem handleSubmit={handleSubmit} tiDeviceValues={tiDeviceValues} gyms={gyms} formSystemValues={formSystemValues} setFormSystemValues={setFormSystemValues} />
                {/* <br/> */}
                <ModalDataRegistered modal={modal} setModal={setModal} message="Solicitud realizada correctamente" />
            </Box>
        
        </>
    )
}
export default FormSystemLayout