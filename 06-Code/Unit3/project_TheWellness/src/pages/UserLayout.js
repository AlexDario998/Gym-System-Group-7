import FormUser from '../components/FormUser'
import {saveUser, getUsers} from '../services/userAxios'
import {getLocals} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';
import ModalDataRegistered from '../components/ModalDataRegistered';
import BreadcrumbsAdmin from '../components/BreadcrumbsAdmin'

const cookies = new Cookies()

const UserLayout = () => {

    const [gyms, setGyms] = useState([])
    const [users, setUsers] = useState([])

    const [values, setValues] = useState({
        name: '',
        userName: '',
        lastName: '',
        password: '',
        userName: '',
        idCard: '',
        email: '',
        type: 0,
        gym: ''
    })

    const [modal, setModal] = useState(false)

    async function handleSubmit(data) {
        const response = await saveUser(data,values,setValues)

        if (response.status == 200) {
            setModal(true);
            
        }
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
        async function loadUsers() {
            const response = await getUsers()

            if (response.status === 200) {
                setUsers(response.data)
                
            }
        }

        loadUsers()
        
    }, [])

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '1') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
                class = "imgUser"
            >
                <NavBar />
                <BreadcrumbsAdmin breadcrumb1="Página principal" breadcrumb2="Agregar usuario"/>
                <br/><br/>
                <FormUser handleSubmit={handleSubmit} gyms={gyms} users={users} formUserValues={values} setFormUservalues={setValues} />
                <br/>
                <ModalDataRegistered modal={modal} setModal={setModal} message="Datos registrados correctamente" />
            </Box>
        
        </>
    )
}
export default UserLayout