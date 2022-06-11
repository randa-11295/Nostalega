import Box from "@mui/material/Box" 
import Typography from "@mui/material/Typography" 
import Image from "next/image"
import photo from "../../../public/photos/HomeSlider/bannar.jpg"
import ButtonComponant from "../comman/ButtonComponant"
import IconCustomButton from "../comman/IconCustomButton"
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlayIcon from "../comman/PlayIcon"

const MovieCard =()=>{

const BoxStyle = {
    background : "var(--creemy)",
    margin : " 40px " , 
    width : "260px" ,
    borderRadius : "12px",
    color : "black" ,
    padding : "20px" ,
}

const containImage = { 
    outline : '1px solid var(--smoothRed)',
    height : "200px" ,
    overflow : "hidden"  ,
    margin :"auto"  , 
    borderRadius : "12px" ,
    position : "relative",
    filter: "grayscale(100%)",   
} 


const TextStyle ={ 
    marginTop : '15px' ,
    fontFamily: 'Noto Naskh Arabic',                                                                                                     
    fontSize : '1.8rem' ,
    fontWeight : "800" ,
   
}

const pragStyle ={
    margin: '10px' ,
    fontFamily: 'Noto Naskh Arabic',            
    fontSize : '.8rem' ,
    fontWeight : "600" ,
    color : "var(--Grey)"
   
}
return (
<Box component="aside" sx={ BoxStyle }>
    <Box  sx={containImage}>
        <Image layout="fill" objectFit='cover'  alt="movie bannar " src={photo} />
    </Box>

    <Typography variant="h3" component="h3"  sx={TextStyle} >      
            أميرة حبي انا
     </Typography> 

     <Typography variant="p" component="p"  sx={pragStyle} >      
           فيلم . موسم واحد . 1977
     </Typography> 

     <Box>
        <ButtonComponant small={true}>
              مشاهدة
            <PlayIcon />
        </ButtonComponant>
     

        <IconCustomButton title='إضافة لقائمتي' small={true}>
             <PlaylistAddIcon />
        </IconCustomButton>
     </Box>



     

</Box>
)
}

export default MovieCard