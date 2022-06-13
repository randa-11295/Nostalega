import Actor from "../MovieCart/Actor"
import Box from "@mui/material/Box" 
import { flexStyle } from "../../General/genralStyle"

const ActorTeam = () =>{

const arr = [1,2,3,4,5]

const boxStyle ={...flexStyle("center") , 
                   flexWrap : "wrap" ,
                   width : {md : '80%' },
                   margin : "auto"}
return ( 
<Box sx={boxStyle}>
{ arr.map((el)=>{
    return (
        <Actor key={el} />
    )})}
</Box>
)}

export default ActorTeam