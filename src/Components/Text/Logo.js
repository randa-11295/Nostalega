import Typography from '@mui/material/Typography';


export default function Logo() {

const TextStyle ={ fontFamily: 'Noto Nastaliq Urdu', 
                    textAlign : "center" ,  
                    fontSize : '1.8rem',
                    fontWeight:700  ,
                 }

return (<Typography variant="h6" component="h6"   color="primary"  sx={TextStyle} >      
            نوستالجيا
        </Typography>

)}