import SlideShow from "./SlideShow/SlideShow";
import Box from '@mui/material/Box';
import { flexStyle } from "../../General/genralStyle";
import  classes from "./HomeHeader.module.css"
import MainTitle from "../Text/MainTitle";

const HomeHeader =()=>{
    return(
        <Box  component="header"  sx={{background : "blaxk" , height : "600px" ,  position: "relative",
        flexDirection: {xs : 'column' , md : "row", }, ...flexStyle()}}  >

            <Box sx={{ height :{ xs : "40%" , md :"100%"} ,
                                                position: "relative", zIndex : "5",
                                               ...flexStyle(),
                                             width :{ xs : "100%" , md :"40%"} }} >
                      <MainTitle />
                                                 </Box>

            <Box sx={{ width : { xs : "100%" , md :"60%"} , 
                      height : { xs : "60%" , md :"100%"}  }} >
                <SlideShow />
           
            </Box>
            <div className={classes.gradientPart}  />
            
        </Box>
    )
}

export default HomeHeader