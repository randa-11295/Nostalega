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
import { useState } from "react";

const MovieSlideShow = () =>{


const arr= [1,2,3,4,5,6,7,8]

const navigationPrevRef = useRef(null)
const navigationNextRef = useRef(null)

const clickHandel = (swiper) => {
    swiper.params.navigation.prevEl = navigationPrevRef.current
    swiper.params.navigation.nextEl = navigationNextRef.current
    swiper.navigation.destroy()
    swiper.navigation.init()
    swiper.navigation.update()
}

return (
<Box sx={{ height : {xs :"300px" , sm : "350px" , md : "450px" , lg : "550px"}}}>

  <Swiper className={classes.swiper }   
          navigation={{ prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current, }} loop={true}
          onInit={clickHandel}  modules={[Navigation , Autoplay ]}  speed ={1500} slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false, }}  >

    { arr.map(el=> <SwiperSlide key={el} > <MovieAds /> </SwiperSlide> )  }


    <div className={classes.next} ref={navigationNextRef} > <ArrowButton next={true} /> </div>
    <div className={classes.prev} ref={navigationPrevRef} > <ArrowButton next={false} /> </div>
  </Swiper>
</Box>
);
}


export default MovieSlideShow