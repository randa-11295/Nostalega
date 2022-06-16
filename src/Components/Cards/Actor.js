import pathImg from "../../../public/photos/HomeSlider/hend.jpg"
import Photo from "../comman/Photo"
import Box from "@mui/material/Box" 
import Typography from "@mui/material/Typography" 

const Actor =() =>{
  return (
<Box sx={{width : "130px"  , margin : "15px"}}>
    <Box sx = {{width : "80px" , height : "80px" ,   overflow : "hidden" ,   borderRadius : "50%" , margin : 'auto'}} >
        <Photo  title="hend"  path={pathImg}/>
    </Box>
  
    <Typography variant="h5" component="h3"  sx={{ margin : "10px 0 5px" , fontWeight : '800' , fontSize : "1.6rem" ,  }} >      
        هند رستم  
    </Typography> 

    <Typography variant="p" component="p"  sx={{ textAlign : "center"}} >      
        سميحة
    </Typography> 
</Box>
  )
}


export default Actor