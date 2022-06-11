import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Pagination';
import { flexStyle } from '../../General/genralStyle';

const PagesBar =()=>{
 
const pageinstStyle = {
     direction: 'ltr', 
     background : "pink",
        margin : "0px 0 60px" , 
        "& *": { color: "var(--creemy) !important" 
     }}                  

 return (
<Box sx={{...flexStyle() , background : "pink", }}>

   <Pagination count={10} color="primary"  sx={ pageinstStyle}  />               
</Box>
)}

export default PagesBar