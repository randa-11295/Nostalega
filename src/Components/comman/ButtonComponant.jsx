import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

const ButtonComponant =(props)=>{


  

    return   (
                <Fab variant="extended" size="small" color="primary" aria-label="add" sx={{ marginLeft: 1 }} >
               
                   {props.children}
                 </Fab>
             
    )}

export default ButtonComponant