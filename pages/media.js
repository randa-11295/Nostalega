import { Box } from "@mui/material"
import classes from "./media.module.css"
import ContainerBox from "../src/HOC/ContainerBox"
import { height } from "@mui/system"
import MainTitle from "../src/Components/Text/MainTitle"
import Typography from '@mui/material/Typography';


const vedioStyle ={  width : {md : '90%' , lg : '80%'  , }, 
                     height :{ xs : '350px' ,  md : "400px"  , lg : "500px" },
                     margin : " auto" ,
                     padding : '20px' ,
                     borderRadius : "8px" ,
                     border : "1px solid white",

}

const TextStyle ={  margin : "100px 10px 70px",
    fontFamily: 'Noto Nastaliq Urdu', 
                      textAlign : "center" ,  
                      fontSize : {xs : '3rem' , lg : '4rem'  , } ,
                    }


const media =() =>{
    return(
         <ContainerBox>

    <Typography variant="h1" component="h1"  sx={TextStyle} >      
             يا واد يا تقيل
    </Typography>
    <Box sx={vedioStyle} >
    <iframe width="100%"
            height="100%" 
            src="https://www.youtube.com/embed/pigh5IgA7qQ" 
            title="YouTube video player"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="accelerometer; autoplay;  encrypted-media;  picture-in-picture"
        /> 
    
     </Box>
          </ContainerBox >
    )
}


export default media