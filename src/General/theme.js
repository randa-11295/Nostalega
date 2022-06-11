import {  createTheme } from '@mui/material/styles';

 const theme =   createTheme({
    palette: {
         // smooth red
          primary: {               
              main: '#d15050',
              contrastText : '#f1e9e1'

         },
         //   creamy  
         secondary:  {               
              main: '#f1e9e1',
              contrastText : '#000'
  
         },   
     },  
  })

  export default theme