import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'

const MatEdit = ({ index }) => {

    const handleEditClick = () => {
        
        console.log(index)
    };
  
    return (
        
        <IconButton 
            color="secondary"
            aria-label="add an alarm"
            onClick={handleEditClick}
        >
            <EditIcon 
                style={{
                    color: '#2196f3'
                }}
            />
        </IconButton>
        
                
    )
}
export default MatEdit