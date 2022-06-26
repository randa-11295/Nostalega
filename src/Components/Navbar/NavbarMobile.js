import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  SideNavbar from "./SideNavbar"
import { useState } from 'react';
import SearchInputTablet from "../Comman/searchInputTablet/SearchInputTablet"

export default function NavbarMobile() {

const [right, setRight] = useState(false);

const toggleDrawer = ( open) =>  {
  setRight(open );
};

return (  
<AppBar sx={{background : "var(--lightBlack)" , display : { md : "none"} }}>
  <Toolbar>
    
    <IconButton size="large" onClick={ ()=>{ toggleDrawer( true) } }  edge="start"  color="inherit"  aria-label="menu"  sx={{ mr: 2 }}>  
      <MenuIcon /> 
    </IconButton>

    <Box sx={{ width : "70%" , marginRight : "auto"}}>
        <SearchInputTablet />
    </Box>
    
  </Toolbar>
  <SideNavbar right={right} toggleDrawer={toggleDrawer} />
</AppBar>

);
}

