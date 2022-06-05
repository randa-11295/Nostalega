import Typography from '@mui/material/Typography';


export default function MainTitle() {

const TextStyle ={ 
  fontFamily: 'Noto Nastaliq Urdu', 
                    textAlign : "center" ,  
                    fontSize : {sm : '8rem' , md : '10rem'  , xl : "11rem" } ,
                  }

return (<Typography variant="h1" component="h1"  sx={TextStyle} >      
            نوستاليجا
        </Typography>

)}