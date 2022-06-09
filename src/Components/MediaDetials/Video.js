import { Box } from "@mui/material"

const vedioStyle ={  width : {md : '90%' , lg : '80%'  , }, 
                     height :{ xs : '350px' ,  md : "400px"  , lg : "500px" },
                     margin : " auto" ,
                     padding : '20px' ,
                     borderRadius : "8px" ,
                     border : "1px solid white",

}

const Video =() =>{
    return(
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
         
    )
}


export default Video