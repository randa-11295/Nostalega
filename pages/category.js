import MovieCard from "../src/Components/movieCart/MovieCard"
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination';
import {flexStyle } from "../src/General/genralStyle"
import ContainerBox from "../src/Components/HOC/ContainerBox"
import MovieSlideShow from "../src/Components/Category/MovieSlideShow/MovieSlideShow";

const category =()=>{

const pageinstStyle ={direction: 'ltr', 
                    margin : "20px 0 60px" , 
                    "& *": { color: "var(--creemy) !important" 
}}                  

const  boxStyle ={
    display : "flex" ,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
return ( 
<ContainerBox>
    <MovieSlideShow />

    
<Box sx={boxStyle}>
    { arr.map((el)=>{
        return (
            <MovieCard />
        )
    })}
</Box>




<Box sx={flexStyle()}>
    <Pagination count={10} color="primary"  sx={ pageinstStyle}  />             
</Box>
</ContainerBox>
)
}

export default category