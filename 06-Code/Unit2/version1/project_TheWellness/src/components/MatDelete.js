import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'

const MatDelete = ( props ) => {

    const index = props.index
    const handleDeleteRegister = props.handleDeleteRegister

    const handleDeleteClick = () => {
        
        const option = window.confirm('¿Está seguro que desea eliminar este registro de forma permanente?')

        if (option === true) {
            handleDeleteRegister(index)
        }
        
    };
  
    return (
        <IconButton 
            color="secondary"
            aria-label="add an alarm"
            onClick={handleDeleteClick}
        >
            <DeleteIcon 
                style={{
                    color: '#e91e63'
                }}
            />
        </IconButton>
    )
}
export default MatDelete