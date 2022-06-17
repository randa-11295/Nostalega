import FadeSlideShow from "../FadeSlideShow/FadeSlideShow";
import Box from '@mui/material/Box';
import { flexStyle } from "../../../General/genralStyle";
import  classes from "./HomeHeader.module.css"
import MainTitle from "../../Text/MainTitle";
import  ContainerBox from "../../HOC/ContainerBox"
import Typography from '@mui/material/Typography';

const boxStyle = { height : "100vh",
            position: "relative",
            background : "green",             
            textAlign :{ xs :"center" , md : "right"}, 
            flexDirection: {xs : 'column' , md : "row", },
            ...flexStyle("flex-end")}
    
const textStyle ={
    margin : {xs : "auto" ,md : "60px 0 0" , lg : "80px 0 0"},
    lineHeight : "2rem" , 
    width :{xs : "90%" , sm : "100%" , md : "55%" , lg : "48%"},
    fontSize : {xs : '.9rem' , sm : "1rem"}
}
const HomeHeader =()=>{
return(
<Box  component="header"  sx={boxStyle}  >

    <Box component="section"  sx={{ width : { xs : "100%" , md :"60%"} ,
                              height : { xs : "50%" , md :"100%"}  }} >
        <FadeSlideShow />
    </Box>

    <Box  className={classes.gradientPart} component="main"  >
        <ContainerBox>
            
            <MainTitle />

            <Typography variant="p" component="p" sx={textStyle}  >      
                هل تساءلت يوماً عن سر ذلك الحنين، وذلك الشعور الذي يطاردك عندما تزور بيتك القديم  
                تلك الرائحة المألوفة، ذاك الاطمئنان الذي تشعر به عندما تذهب إلى مكانٍ من 
                الماضي، غرفتك القديمة، الصور التذكارية زمن الطفولة
                الخالي من المسؤوليات والمخاوف، عندما كان كل شيء جيدا، وكان الجميع سعداء!
                وتتمنى لو أنك تستعيد تلك الحياة ولو للحظات أنت هنا في حالة "النوستالجيا"
            </Typography>

        </ContainerBox>
      </Box>
        
 </Box>
)
}

export default HomeHeader