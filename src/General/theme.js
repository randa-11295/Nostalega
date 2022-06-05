import {  createTheme } from '@mui/material/styles';

 const theme =   createTheme({
    palette: {
         // smooth red
          primary: {               
              main: '#da6868',
              contrastText : '#f6dec4'

         },
         //   creamy  
         secondary:  {               
              main: '#f6dec4',
              contrastText : '#000'
  
         },   
     },  
  })

  export default theme