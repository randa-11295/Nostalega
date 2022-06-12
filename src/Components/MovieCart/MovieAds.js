import { Box } from "@mui/system"
import Image from "next/image"
import bannar from "../../../public/photos/HomeSlider/bannar.jpg"
import Typography from '@mui/material/Typography';
import ButtonComponant from "../comman/ButtonComponant";
import PlayIcon from "../comman/PlayIcon";
import IconCustomButton from "../comman/IconCustomButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const boxStyle = {background : "yellow" , 
                 height : "100%" , 
                 justifyContent :{xs: "center" , sm : "flex-start" },
                 display : "flex",
                 alignItems: {xs: "center"  , md : "flex-end"},
}

const TextStyle ={ margin : {xs: " 35px 0 50px" , md: "0 0 60px"},
fontFamily: 'Noto Nastaliq Urdu',                 
fontSize : {xs : '2.2rem' ,  md : "3.3rem"  } ,
}

const pragStyle ={
lineHeight : "  1.8rem",
fontFamily: 'Noto Naskh Arabic',     
wordSpacing: '2px',
margin : { md : "5px 0 20px"}
}

const contentBox = { textAlign:{ xs: 'center' , md : "right"}  , 
                   margin : {xs :"10px" , sm : "10px 45px"  , md : "65px" , lg : "85px"},
                   background : "blue" ,  width : "250px" }


const MovieAds =()=>{
return(
      <Box sx={boxStyle} > 
       
         <Box sx={contentBox}>
      <Typography variant="h3" component="h3"  sx={TextStyle} >      
            أميرة حبي انا
      </Typography>   

      <Typography variant="b" component="b"  sx={{fontFamily: 'Noto Naskh Arabic',}}    >      
        موسم واحد - فيلم - 1974
      </Typography> 

     
        
       

      <Box sx={{margin : "20px 0"  }} >
        <ButtonComponant >
            مشاهدة الفيلم
            <PlayIcon />
        </ButtonComponant>

        <IconCustomButton  title="اضافة لقائمتي" >
            <PlaylistAddIcon />
        </IconCustomButton>
        
      </Box>

      </Box>
      </Box>
    )
}

export default MovieAds