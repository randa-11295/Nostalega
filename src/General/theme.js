import {  createTheme } from '@mui/material/styles';

 const theme =   createTheme({
    palette: {
         // smooth red
          primary: {               
              main: '#d15050',
              contrastText : '#fff'

         },
         //   creamy  
         secondary:  {               
              main: '#ece4db',
              contrastText : '#000'
  
         },   
     },  
  })

  export default theme