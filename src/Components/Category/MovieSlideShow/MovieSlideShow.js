import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay} from "swiper";
import classes from "./MovieSlideShow.module.css";
import MovieAds from "../../MovieCart/MovieAds"
import { Box } from "@mui/system";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MovieSlideShow = () =>{
        return (
            <Box sx={{background : "red" , height : {xs :"300px" , sm : "350px" , md : "450px" , lg : "550px"}}}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Navigation , Autoplay ]}
                className={classes.swiper}
                //  autoplay={{ delay: 2000, disableOnInteraction: false, }} speed ={900} 
              >
                <SwiperSlide> <MovieAds /> </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </Box>
          );
        }


export default MovieSlideShow