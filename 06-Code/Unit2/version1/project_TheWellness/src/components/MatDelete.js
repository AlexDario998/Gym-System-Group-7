import { FormControlLabel, IconButton } from "@material-ui/core"
import DeleteIcon from '@mui/icons-material/Delete'
import { red } from "@material-ui/core/colors"

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
        <FormControlLabel
            control={
                <IconButton
                    color="secondary"
                    aria-label="add an alarm"
                    onClick={handleDeleteClick}
                >
                    <DeleteIcon style={{ color: red[500] }} />
                </IconButton>
            }
        />
    )
}
export default MatDelete