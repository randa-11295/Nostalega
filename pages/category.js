import MovieCard from "../src/Components/movieCart/MovieCard"
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination';
import {flexStyle } from "../src/General/genralStyle"

const category =()=>{

const pageinstStyle ={direction: 'ltr', 
                    margin : "20px 0 60px" , 
                    "& *": { color: "var(--creemy) !important" 
}}                  

const  boxStyle ={
    display : "flex" ,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop : "100px",
    padding : "0 5%"
}

    return ( <>
        <Box sx={boxStyle}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </Box>

         <Box sx={flexStyle()}>

        <Pagination count={10} color="primary"  sx={ pageinstStyle}
                         
                        />


                            
                         
       </Box>
        </>
    )
}

export default category