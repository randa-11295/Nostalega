import SlideShow from "../HOC/SlideShow/SlideShow";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import MovieCard from "../Cards/MovieCard";
import HeadLine from "../Text/HeadLine";
import { Box } from "@mui/material";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const CardSlideShow = () => {
  return (
    <Box sx={{ textAlign: "center", margin: "100px 0" }}>
      <HeadLine text="افضل الافلام" />
      <SlideShow parts={true}>
        {arr.map((el) => (
          <SwiperSlide key={uuidv4()}>
            {" "}
            <MovieCard />{" "}
          </SwiperSlide>
        ))}
      </SlideShow>
    </Box>
  );
};

export default CardSlideShow;
