import { Box } from "@mui/system"
import img from "../../../public/photos/HomeSlider/Zbeda.jpg"
import Typography from '@mui/material/Typography';
import ButtonCustom from "../Comman/ButtonCustom";
import PlayIcon from "../Comman/PlayIcon";
import IconCustomButton from "../Comman/IconCustomButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Photo from "../Comman/Photo";
import Headline from "../Text/HeadLine";


const boxStyle = {height : "100%" , 
                 justifyContent :{xs: "center" , md : "flex-start" },
                 display : "flex",
                 alignItems: {xs: "center"  , lg : "flex-end"},
}


const contentBox = { textAlign:{ xs: 'center' , md : "left"}  , 
                      margin : {xs :"10px" , sm : "10px 45px"  , md : " 0 130px" , lg : "0 0 70px 140px"},
                      position : "relative",
                      ZIndex : "3" ,
                      width : "250px" }


const MovieAds =()=>{


return(
<Box sx={boxStyle} >  
    <Box sx={{position : "absolute" , width : "100%" , height : "100%" ,  filter: "brightness(40%)"}}>
        <Photo title="bannar" path={"https://i.ibb.co/Mf1Sw1P/0089c1ff-0898-40a8-9b74-acc395bcc9f7-16x9-1200x676.jpg"} />
    </Box>
    <Box sx={contentBox}>

      <Headline text="أميرة حبي انا" />
      

      <Typography variant="b" component="b"   >      
        موسم واحد - فيلم - 1974
      </Typography> 

      <Box sx={{margin : "20px 0"  }} >
          <ButtonCustom >
              مشاهدة الفيلم
              <PlayIcon />
          </ButtonCustom>

          <IconCustomButton  title="اضافة لقائمتي" >
              <PlaylistAddIcon />
          </IconCustomButton>    
      </Box>
    </Box>
</Box>
)
}

export default MovieAds