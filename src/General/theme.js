import {  createTheme } from '@mui/material/styles';

 const theme =   createTheme({
    palette: {
          primary: {               
              main: '#FBBB4F',
              contrastText : '#524439'
         },
         secondary:  {               
              main: '#f3ebe4',
              light :'#f3ebe4c1'
         },
         info:  {               
              main: '#A46855',
         },
         success :  {               
              main: '#005247',
         },
     },
   
  })

  export default theme