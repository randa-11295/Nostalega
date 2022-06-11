import MovieCard from "../src/Components/movieCart/MovieCard"
import Box from '@mui/material/Box'
const category =()=>{
  const  boxStyle ={
        
        marginTop : "100px",
    }
    return (
        <Box sx={boxStyle}>
            <MovieCard />
        </Box>
    )
}

export default category