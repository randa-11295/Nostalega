import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {flexStyle} from '../../General/genralStyle.js';
import {headLineStyle} from '../../General/genralStyle.js';
import UserMenu  from './UserMenu';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchInput from '../comman/SearchInput'
import {Link } from "react-router-dom";

const buttonStyle={
  fontSize:{sm: '.9rem' , md : '1rem'},
  textTransform: 'capitalize',
}


export default function NavbarTablet(props) {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  sx={{ bgcolor:"secondary.main"  , }}>
        <Toolbar sx={{ ...flexStyle('space-between')}}>

          <Box sx={{  ...flexStyle('space-between'),
           width :  { sm :'80%' ,md : '75%' , lg : '55%' } }}>
            
            <Typography variant="h6" component="h6" sx={headLineStyle('1.4rem') }>
                        art line
            </Typography>
              {
                props.routeData.map((el)=>{
                  return  <Button onClick={()=>{ props.routeChange(el.text)}} sx={buttonStyle} key={el.id} color="inherit">
                              {el.text}
                           </Button>})
              }
            
            <Box sx={{width:{ sm : '200px' , md : '250px' , lg : '300p'}}} >
                <SearchInput />
            </Box>
          </Box>

            <Box sx={{ ...flexStyle()}}  >
                <ShoppingCartCheckoutIcon   />
                <UserMenu />
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
