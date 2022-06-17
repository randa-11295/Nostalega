import { Box } from "@mui/material"
import ImageCover from "./ImageCover/ImageCover"
import { useState  , useRef , useEffect} from "react"

const vedioStyle ={  height :{ xs : '350px' , sm : "400px", md : "500px"  , lg : "600px" },
                     margin : " 0 auto 60px" ,
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

useEffect(()=>{
   console.log(media)
   media.current?.focus()
},[runVideo])

const media = useRef(null)

const  changeVideo =()=>{
const isVideo = !runVideo 
setRunVideo(isVideo)  
console.log(media)
// media.current.play()

}

return(
<Box sx={vedioStyle} >
{ runVideo ?  <ImageCover changeVideo= {changeVideo} />  : 
              <iframe width="100%"  height="100%" 
                     src="https://www.youtube.com/embed/DX3GVPCaAOw?autoplay=1" 
                     title="YouTube video player"
                     frameBorder="0"
                     allowFullScreen="allowfullscreen"
                     allow="accelerometer; autoplay;  encrypted-media;  picture-in-picture"
                     ref={media}
/>}

</Box>
)}


export default Video