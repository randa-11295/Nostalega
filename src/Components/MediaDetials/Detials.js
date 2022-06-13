import { Box } from "@mui/material"
import bannar from "../../../public/photos/HomeSlider/bannar.jpg"
import Typography from '@mui/material/Typography';
import TypeDetils from "./TypeDetils";
import ButtonComponant from "../comman/ButtonComponant";
import PlayIcon from "../comman/PlayIcon";
import IconCustomButton from "../comman/IconCustomButton";
import DownloadIcon from '@mui/icons-material/Download';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Photo from "../comman/photo";
import Grid from '@mui/material/Grid';
import Headline from "../Text/HeadLine";
import {flexStyle} from "../../General/genralStyle"

const containImage = {  width : {xs : '250px'},
                        height :{ xs : "350px" },
                        padding : "0" ,
                        margin :{ xs :"auto"  , md : '0'},
                        borderRadius : "15px" ,
                        overflow : 'hidden'
                    } 

const pragStyle ={
      lineHeight : "  1.8rem",
      wordSpacing: '2px',
      margin : { md : "5px 0 20px"}
}

const Detials = ()=>{
    return (
<Grid container  sx= {{padding : {xs : "80px 0" ,  md : "120px 0"}}} >
   <Grid item xs={12} md={4} lg={3.5} sx={ flexStyle() }  >

      <Box sx={containImage}>
          <Photo path={bannar} />
      </Box>

  </Grid>
     <Grid item xs={12} md={8} lg={8.5} >

      <Box sx={{ textAlign:{ xs: 'center' , md : "right"}  , padding : {xs : "0 20px"} }}>
    
      <Headline text="اميرة حبي انا" />

      <Typography variant="b" component="b"    >      
        موسم واحد - فيلم - 1974
      </Typography> 

      <TypeDetils />
        
      <Typography variant="p" component="p"  sx={pragStyle}    >      
      اميرة حبي أنا فيلم مصري إنتاج عام 1974م، بطولة سعاد حسني ، حسين فهمي
      ، سمير غانم ، كريمة مختار ، عماد حمدي . تدور أحداث الفيلم حول عادل نجيب الذي يعمل في شركة ومتزوج من أماني ابنة رئيس الشركة. يقع عادل في حب فتاة اسمها «أميرة» تعمل في نفس الشركة، وتستمر
        أحداث الفيلم بالتصاعد بعد أن يعرف والد نبيلة بعلاقة أميرة وعادل.
      </Typography>    

      <Box sx={{margin : "20px 0"}} >
        <ButtonComponant >
            مشاهدة الفيلم
            <PlayIcon />
        </ButtonComponant>
        
        <IconCustomButton title="Add to My List"  >
            <PlaylistAddIcon /> 
        </IconCustomButton>

          <IconCustomButton  title="Download" >
              <DownloadIcon />
          </IconCustomButton>
        
      </Box>

      </Box>

  </Grid>
</Grid>

)
}

export default Detials