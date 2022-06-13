import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const listStyle = { width:  250 ,
                    direction: 'rtl' ,
                    background : "var(--lightBlack)" ,
                    color: 'var(--creemy)' ,
                    direction: 'rtl' ,
                    minHeight : "100%"}

export default function SwipeableTemporaryDrawer(props) {





return (
<  >
    <Button onClick={()=>{ props.toggleDrawer( false) }} >{'randa'}</Button>
<SwipeableDrawer  anchor={'right'}  open={props.right} 
                                    onClose={()=>{ props.toggleDrawer( false) }} 
                                    onOpen={()=>{ props.toggleDrawer( false) }} >
  
   <Box sx={listStyle}   onClick={()=>{ props.toggleDrawer( false) }}   >

      <List sx={{padding : " 0 10%"}}>
        {[ 'افلام',  'اغاني', 'مسلسلات'].map((text) => (
            <div key={text}>
          <ListItem  >
            <ListItemButton>
              <ListItemText primary={text} sx={{ textAlign : "center"  }}/>
            </ListItemButton>
          </ListItem>
            <Divider sx={{background : 'var(--creemy)' ,}} />
          </div>
        ))}
      </List>
     
    </Box>

</SwipeableDrawer>
</>
);
}
