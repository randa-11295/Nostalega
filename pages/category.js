import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination';
import {flexStyle } from "../src/General/genralStyle"
import ContainerBox from "../src/Components/HOC/ContainerBox"
import MovieSlideShow from "../src/Components/Category/MovieSlideShow/MovieSlideShow";
import CategoryCardContiner from "../src/Components/Category/CategoryCardContiner";
import PagesBar from "../src/Components/Category/PagesBar";

const category =()=>{

const pageinstStyle ={direction: 'ltr', 
                    margin : "20px 0 70px" , 
                    "& *": { color: "var(--creemy) !important" 
     }}                  


return ( 
<ContainerBox>
    <MovieSlideShow />
    <CategoryCardContiner />

<PagesBar />



<Box sx={flexStyle()}>
    <Pagination count={10} color="primary"  sx={ pageinstStyle}  />             
</Box>
</ContainerBox>
)
}

export default category