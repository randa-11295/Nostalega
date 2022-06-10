import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';



export default function TypeDetils() {
   
const typsMovie = [ 'رومانسي' ,'كوميدي'  , 'كوميدي' ,'دراما' ]

return (
  <Box sx={{padding : {xs : "15px" , md : "0"}}}>
    { typsMovie.map((el)=>{
        return (
        <Chip  size="small"  label={el}  variant="outlined"  color="secondary"
                sx={{margin : "5px"}} />
        )
      })
    }

  </Box>
);
}
