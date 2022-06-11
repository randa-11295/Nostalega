import { Box } from "@mui/material"
import ImageCover from "./ImageCover/ImageCover"
import { useState } from "react"

const vedioStyle ={ 
                     height :{ xs : '350px' , sm : "400px", md : "500px"  , lg : "550px" },
                     margin : " auto" ,
                     borderRadius : "15px" ,
                     border : "1px solid white",
                     overflow: 'hidden',
                     transition: '.3s ease-in-out all' ,
                     '&:hover': {
                        border : 'solid 1px var(--smoothRed)',
                     },

}

const Video =() =>{
const [runVideo , setRunVideo]  = useState(true)

return(
<Box sx={vedioStyle} >
{ runVideo ?  <ImageCover />  : <iframe width="100%"
                                 height="100%" 
                                 src="https://www.youtube.com/embed/pigh5IgA7qQ" 
                                 title="YouTube video player"
                                 frameborder="0"
                                 allowfullscreen="allowfullscreen"
                                 allow="accelerometer; autoplay;  encrypted-media;  picture-in-picture"
/>  }

</Box>
)}


export default Video