import SlideShow from "./SlideShow/SlideShow";
import Box from '@mui/material/Box';
import { flexStyle } from "../../General/genralStyle";
import  classes from "./HomeHeader.module.css"

const HomeHeader =()=>{
    return(
        <Box sx={{background : "blaxk" , height : "600px" ,  position: "relative",
        flexDirection: {xs : 'column' , md : "row", }, ...flexStyle()}}  >

            <Box sx={{background : "black" , height :{ xs : "40%" , md :"100%"} ,
                                             width :{ xs : "100%" , md :"40%"} }} />

            <Box sx={{ width : { xs : "100%" , md :"60%"} , 
                      height : { xs : "60%" , md :"100%"}  }} >
                <SlideShow />
            </Box>
            <div className={classes.gradientPart} >
            </div>
        </Box>
    )
}

export default HomeHeader