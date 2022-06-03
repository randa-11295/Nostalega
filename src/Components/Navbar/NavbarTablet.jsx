import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {flexStyle} from '../../General/genralStyle.js';
import UserMenu  from './UserMenu';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchInput from '../comman/SearchInput';

const buttonStyle={
  fontSize:{sm: '.9rem' , md : '1rem'},
  textTransform: 'capitalize',
}


export default function NavbarTablet(props) {

const [colorChange, setColorchange] = useState('black');

React.useEffect(()=>{

const changeNavbarColor = () =>{
if(window.scrollY <= 40){
  let numHightY =  window.scrollY  / 40
  setColorchange(`rgba(0, 0, 0,${numHightY});`);
}

else{
  setColorchange('black');
}
};

changeNavbarColor()

window.addEventListener('scroll', changeNavbarColor);
return () => {
  window.removeEventListener('scroll', changeNavbarColor);
}

})

  return (
    
<Box   component="header"  sx={{ flexGrow: 1 }}>
<AppBar  sx={{ bgcolor: colorChange , boxShadow : "none" , transition : ".3s" }}>
<Toolbar sx={{ ...flexStyle('space-between')}}>

<Box sx={{  ...flexStyle('space-between'),
  width :  { sm :'80%' ,md : '75%' , lg : '55%' } }}>
  
<Typography variant="h6" component="h6" >
            نوستاليجا
</Typography>
{ props.routeData.map((el)=>{
    return  <Button onClick={()=>{ props.routeChange(el.text)}} sx={buttonStyle} key={el.id} color="inherit">
                {el.text}
              </Button>})
}

<Box sx={{width:{ sm : '200px' , md : '250px' , lg : '300p'}}} >
    kkkkkkk
</Box>
</Box>

  <Box sx={{ ...flexStyle()}}  >
      <UserMenu />
  </Box>
</Toolbar>
</AppBar>
</Box>
          );
}
