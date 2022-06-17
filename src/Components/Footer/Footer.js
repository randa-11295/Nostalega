import { Box } from "@mui/system"
import Logo from "../Text/Logo"
import Typography from '@mui/material/Typography';
import HeadLine from "../Text/HeadLine"
import Divider from '@mui/material/Divider';
import ContainerBox from '../HOC/ContainerBox'

const Footer = () =>{

const textStyle ={
    lineHeight : "2rem" , 
    wordSpacing: "2px" ,
    fontSize :  '.9rem' , 
    textAlign : "center " ,
    margin : '10px ' ,
}

    return (

<Box >
    <ContainerBox>
   {/* <Box>
      <Logo />
      <Typography variant="p" component="p" sx={textStyle}  >      
         نوستاليچيا هو اول  موقع متخصص في الافلام والمسلسلات  
         والاغاني القديمة قمنا بتطويره بهدف  اعاده الحياة  لذكريات عشنا معها لحظات سعيدة  
         ومحاولة الحافظ علي تراثينا الثقافي 
      </Typography>
   </Box> */}
       <Divider  sx={{background : "var(--creemy)"}}/>

       <Typography variant="p" component="p" sx={textStyle}  >      
       Copy write @ 2022
      </Typography>

   
   </ContainerBox>
</Box>

)
}

export default Footer