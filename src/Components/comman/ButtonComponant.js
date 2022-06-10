import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';

const ButtonComponant =(props)=>{

return   (
<Fab variant="extended"  color="primary" aria-label="add" sx={{ marginLeft: "15px" }} >
  {props.children}
</Fab>

)}

export default ButtonComponant