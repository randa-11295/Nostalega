import {  createTheme } from '@mui/material/styles';

const theme =   createTheme({
     direction: 'rtl',      
palette: {
     // smooth red
     
     background: {
            default: "#151515"
          },
          text: {
               primary: "#ffffff"
             },
     primary: {               
          main: '#d15050',
          contrastText : '#f3f3f3'
     },
     //   creamy  
     secondary:  {               
          main: '#f3f3f3',
          contrastText : '#000'
     },},  
})

export default theme