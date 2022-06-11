import Box from "@mui/material/Box" 
import Typography from "@mui/material/Typography" 
import Image from "next/image"
import photo from "../../../public/photos/HomeSlider/bannar.jpg"
import  ButtonComponant from "../comman/ButtonComponant"

const MovieCard =()=>{

const BoxStyle = {
    background : "var(--creemy)",
    margin : "auto" , 
    width : "280px" ,
    borderRadius : "12px",
    color : "black" ,
    padding : "20px" ,
}

const containImage = { 
    height :{ xs : "240px" },
    overflow : "hidden"  ,
    margin :"auto"  , 
    borderRadius : "12px" ,
    filter: "grayscale(100%)",   
} 


const TextStyle ={ 
    marginTop : '20px' ,
    fontFamily: 'Noto Naskh Arabic',            
    fontSize : '1.5rem' ,
    fontWeight : "700" ,
}

const pragStyle ={
    margin: '5px' ,
    fontFamily: 'Noto Naskh Arabic',            
    fontSize : '.8rem' ,
   
}
return (
<Box component="aside" sx={ BoxStyle }>
    <Box  sx={containImage}>
        <Image objectFit="cover" alt="movie bannar " src={photo} />
    </Box>

    <Typography variant="h3" component="h3"  sx={TextStyle} >      
            أميرة حبي انا
     </Typography> 

     <Typography variant="p" component="p"  sx={pragStyle} >      
           فيلم . موسم واحد . 1977
     </Typography> 

     <Box>
        <ButtonComponant>
            مشاهدة
        </ButtonComponant>
     </Box>


     

</Box>
)
}

export default MovieCard