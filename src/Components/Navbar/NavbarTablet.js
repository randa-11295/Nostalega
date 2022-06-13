import { useState  , useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {flexStyle} from '../../General/genralStyle.js';
import UserMenu  from './UserMenu';
import { v4 as uuid } from 'uuid';
import Logo from "../Text/Logo";
import ContainerBox from '../HOC/ContainerBox';
import SearchInputTablet from '../comman/searchInputTablet/SearchInputTablet';

const buttonStyle={
  fontSize:{sm: '.9rem' , md : '1rem'},
  textTransform: 'capitalize',
}


export default function NavbarTablet(props) {

const [colorChange, setColorchange] = useState('var(--lightBlack)');

useEffect(()=>{

const changeNavbarColor = () =>{
if(window.scrollY <= 40){
  let numHightY =  window.scrollY  / 40
  setColorchange(`rgba(21, 21, 21,${numHightY});`);
}

else{
  setColorchange('var(--lightBlack)');
}
};

changeNavbarColor()

window.addEventListener('scroll', changeNavbarColor);
return () => {
window.removeEventListener('scroll', changeNavbarColor);
}

})

return (
<AppBar component="nav" sx={{ background :colorChange ,  boxShadow : "none" , transition : ".3s"  , display : {xs : "none" , md : "block"}}}>
<ContainerBox>
<Toolbar sx={{ ...flexStyle('space-between') ,  padding :"0px !important" , }}  >
  
<Logo />
<Box sx={{width : '40%'}}>
<SearchInputTablet />
</Box>
 <Box>
  { props.routeData.map((el)=>{
      return  <Button onClick={()=>{ props.routeChange(el.text)}} sx={buttonStyle} key={uuid()} color="inherit">
                  {el}
              </Button>})
  }
  
 <UserMenu />
 </Box>
 

</Toolbar>
</ContainerBox>
</AppBar>
 );
}
