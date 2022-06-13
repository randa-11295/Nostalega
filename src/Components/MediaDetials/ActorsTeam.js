import Actor from "../MovieCart/Actor"
import Box from "@mui/material/Box" 
import { flexStyle } from "../../General/genralStyle"
import Headline from "../Text/HeadLine"

const ActorTeam = () =>{

const arr = [1,2,3,4,5]

const boxStyle ={...flexStyle("center") , 
                   flexWrap : "wrap" ,
                   width : {md : '80%' },
                //    background : "red" , 
                   margin :{xs : "60px auto"  , lg :  "85px auto"}}
return (
 <Box sx={{textAlign : "center"  }} >
<Headline center={true} text="فريق العمل" />

<Box sx={boxStyle}>

{ arr.map((el)=>{
    return (
        <Actor key={el} />
    )})}
</Box>
</Box>
)}

export default ActorTeam