import { Box } from "@mui/material"
import Image from "next/image"
import bannar from "../../../public/photos/HomeSlider/bannar.jpg"
import Typography from '@mui/material/Typography';
import TypeDetils from "./TypeDetils";
import ButtonComponant from "../comman/ButtonComponant";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const containImage = {  width : {xs : '280px'},
                       height :{ xs : "380px" },
                      overflow : "hidden"  ,
                      padding : "0" ,
                      margin : "auto" ,
                      borderRadius : "8px" ,
                      filter: "grayscale(98%)",
                      background : "green"} 

 const TextStyle ={  
                    margin : " 35px 0 50px",
                    fontFamily: 'Noto Nastaliq Urdu',                 
                    fontSize : {xs : '2.2rem' ,  } ,
                  }

const Detials = ()=>{
    return (<Box>
                <Box sx={containImage}>
                    <Image objectFit="cover" alt="movie bannar " src={bannar} />
                </Box>
                <Box sx={{ textAlign:{ xs: 'center' , md : "right"} }}>
                   <Typography variant="h3" component="h3"  sx={TextStyle} >      
                        أميرة حبي انا
                  </Typography>   

                  <Typography variant="b" component="b"     >      
                     موسم واحد - فيلم - 1974
                  </Typography> 

                   <TypeDetils />
                     
                  <Typography variant="p" component="p"      >      
                  ميرة حبي أنا فيلم مصري إنتاج عام 1974م، بطولة سعاد حسني ، حسين فهمي
                   ، سمير غانم ، كريمة مختار ، عماد حمدي . تدور أحداث الفيلم حول عادل نجيب الذي يعمل في شركة ومتزوج من أماني ابنة رئيس الشركة. يقع عادل في حب فتاة اسمها «أميرة» تعمل في نفس الشركة، وتستمر
                    أحداث الفيلم بالتصاعد بعد أن يعرف والد نبيلة بعلاقة أميرة وعادل.
                  </Typography>    
                  
                  <Box sx={{margin : "20px 0"}} >
                    <ButtonComponant >
                        مشاهدة الفيلم
                       <PlayArrowIcon sx={{ mr: 1 , transform : "rotate(180deg)" }} fontSize="small" /> 
                    </ButtonComponant>

                    
                  </Box>

                </Box>

            </Box>
    )
}

export default Detials