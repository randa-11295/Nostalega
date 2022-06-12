import Image from "next/image"
import { Box } from "@mui/system"

const containImage = { 
    height : "100%" ,
    overflow : "hidden"  ,
    position : "relative",
    filter: "grayscale(100%)",   
} 


const Photo = (props)=>{
    return(
        <Box  sx={containImage}>
            <Image layout="fill" objectFit='cover'  alt="movie bannar " src={props.src} />
        </Box>
    )
}

export default Photo