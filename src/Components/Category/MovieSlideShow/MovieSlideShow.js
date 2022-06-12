import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Navigation , Autoplay} from "swiper";
import { Box } from "@mui/system";
import classes from "./MovieSlideShow.module.css";
import MovieAds from "../../MovieCart/MovieAds"
import ArrowButton from "../../comman/ArrowButton"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MovieSlideShow = () =>{
   
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)


        return (
            <Box sx={{ height : {xs :"300px" , sm : "350px" , md : "450px" , lg : "550px"}}}>
            
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
          
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

                <div className={classes.prev} ref={navigationPrevRef} > <ArrowButton /> </div>
                <div className={classes.next}  ref={navigationNextRef} > <ArrowButton /> </div>
              </Swiper>
            </Box>
       );
        }


export default MovieSlideShow