import SlideShow from "./SlideShow/SlideShow"
import {  SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from 'uuid';
import MovieCard from "../Cards/MovieCard";

const arr= [1,2,3,4,5,6,7,8]

const CardSlideShow =()=>{
    return(
      <SlideShow parts={true} >
           { arr.map(el=> <SwiperSlide key={uuidv4()} > <MovieCard /> </SwiperSlide> )  }
      </SlideShow>
    )
}

export default CardSlideShow