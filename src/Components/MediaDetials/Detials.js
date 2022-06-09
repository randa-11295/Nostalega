import { Box } from "@mui/material"
import Image from "next/image"
import bannar from "../../../public/photos/HomeSlider/bannar.jpg"
import Typography from '@mui/material/Typography';
import TypeDetils from "./TypeDetils";

const containImage = {width :{xs: "80%" }, 
                       height :{ xs : "340px" },
                      overflow : "hidden"  ,
                      padding : "0" ,
                      margin : "auto" ,
                      borderRadius : "8px" ,
                      filter: "grayscale(98%)",
                      background : "green"} 

 const TextStyle ={  
                    margin : " 30px 0 ",
                    fontFamily: 'Noto Nastaliq Urdu',                 
                    fontSize : {xs : '1.5rem' ,  } ,
                  }

const Detials = ()=>{
    return (<Box>
                <Box sx={containImage}>
                    <Image objectFit="cover" alt="movie bannar " src={bannar} />
                </Box>
                <Box sx={{width : "80%"  , margin : "auto"}}>
                   <Typography variant="h3" component="h3"     sx={TextStyle} >      
                        أميرة حبي انا
                  </Typography>   

                  <Typography variant="b" component="b"     >      
                     موسم واحد  - (1974) - فيلم 
                  </Typography> 

                   <TypeDetils />
                     
                  <Typography variant="p" component="p"     sx={{}} >      
                  ميرة حبي أنا فيلم مصري إنتاج عام 1974م، بطولة سعاد حسني ، حسين فهمي
                   ، سمير غانم ، كريمة مختار ، عماد حمدي . تدور أحداث الفيلم حول عادل نجيب الذي يعمل في شركة ومتزوج من أماني ابنة رئيس الشركة. يقع عادل في حب فتاة اسمها «أميرة» تعمل في نفس الشركة، وتستمر
                    أحداث الفيلم بالتصاعد بعد أن يعرف والد نبيلة بعلاقة أميرة وعادل.
                  </Typography>    

                </Box>

            </Box>
    )
}

export default Detials