import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../Text/Logo';
import useCustomRoute from '../../Hooks/useCustomRoute';

const listStyle = { width:  250 ,
                    direction: 'rtl' ,
                    background : "var(--lightBlack)" ,
                    color: 'var(--creemy)' ,              
                    direction: 'rtl' ,
                    padding : '30px 5px' ,
                    minHeight : "100%"}

const pages = [ 'افلام',  'اغاني', 'مسلسلات' , 'دخول' ,]

export default function SideNavbar(props) {
return (
<SwipeableDrawer  anchor={'right'}  open={props.right}
                                    onClose={()=>{ props.toggleDrawer( false) }} 
                                    onOpen={()=>{ props.toggleDrawer( false) }} >
  
<Box sx={listStyle}   onClick={()=>{ props.toggleDrawer( false) }} >
<Logo />
<List sx={{padding : " 30px  10% 0"  , }}>
{pages.map((text) => (

<ListItem sx={{borderTop : "1px solid var(--creemy)"}} key={text} >
    <ListItemButton>
        <ListItemText primary={text} sx={{ textAlign : "center" } } onClick={()=>{useCustomRoute('category')}}/>
    </ListItemButton>
</ListItem>

))}     
</List>  

</Box>
</SwipeableDrawer>
);
}
