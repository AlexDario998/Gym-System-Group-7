import FormAddLocal from './FormAddLocal'
import {saveLocal} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from './NavBar'

const LocalLayout = () => {

    const handleSubmit = (data) => {
        saveLocal(data)
    }

    return (
        <>
            <Box
                class = "imgLocal"
            >
                <NavBar />
                <br/><br/>
                <FormAddLocal handleSubmit={handleSubmit}/>
                <br/>
            </Box>
        
        </>
    )
}
export default LocalLayout