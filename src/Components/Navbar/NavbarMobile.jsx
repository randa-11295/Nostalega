import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import {flexStyle} from '../../General/genralStyle';
import { v4 as uuid } from 'uuid';

const titleStyle = { flexGrow: 1, 
                  fontWeight : 800 ,
                  fontFamily :  'Lobster',
                  color : '#3C342D',
                 
 }

export default function ButtonAppBar(props) {
    const [checked, setChecked] = React.useState(false);


    const handleNavbarChange = () => {
      setChecked((prev) => !prev);
    };


    const clivkMobNavHandel = (target)=>{
      props.routeChange(target);
      setChecked(false);
    }

return (
<Box sx={{ flexGrow: 1 ,}}  >

<AppBar component='nav'  sx={{ padding : 0 , bgcolor:"secondary.main"  , }}>

{/* tap */}
<Toolbar>
<IconButton
size="small"
edge="start"
color="inherit"
aria-label="menu"
sx={{ mr: 2 }}
onClick ={handleNavbarChange}
>
<MenuIcon />
</IconButton>

<Typography variant="h6" component="h6" sx={titleStyle}>
art line
</Typography>

<Button color="inherit">Login</Button>
</Toolbar>

{/* menu */}
<Collapse in={checked}>
<Box sx={{height : '93vh'}} >
<Box sx={{ width : '80%' , margin : 'auto',  ...flexStyle() ,  flexDirection: 'column'}} >
{props.routeData.map((el)=>{
return( 
<Box sx={{ width : '100%' , textAlign: 'center' }} key={uuid()}>
  <Divider sx={{width :'70%' ,  margin : '13px auto'}} />
     <Button onClick={()=>{ clivkMobNavHandel(el.text)}} key={el} color="inherit">
        {el.text}    
    </Button>
</Box>
)})}

</Box>
</Box>
</Collapse>

</AppBar>
</Box>
);
}
