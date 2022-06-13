import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import  SideNavbar from "./SideNavbar"
import { useState } from 'react';

export default function NavbarMobile() {

  const [right, setRight] = useState(false);

  const toggleDrawer = ( open) =>  {
    setRight(open );
  };


  return (
    
      <AppBar sx={{background : "var(--lightBlack)" , display : { md : "none"} }}>
        <Toolbar>
          <IconButton   size="large"  onClick={ ()=>{ toggleDrawer( true) } } 
           edge="start"  color="inherit"  aria-label="menu"  sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
        
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
               
                color="inherit"
              >
               
                <AccountCircle />
              </IconButton>
           
       
        </Toolbar>
       <SideNavbar right={right} toggleDrawer={toggleDrawer} />
      </AppBar>
  
  );
}

