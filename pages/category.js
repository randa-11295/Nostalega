import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { flexStyle } from "../src/General/genralStyle";
import ContainerBox from "../src/Components/HOC/ContainerBox";
import SlideShow from "../src/Components/HOC/SlideShow/SlideShow";
import CategoryCardContiner from "../src/Components/Category/CategoryCardContiner";
import MovieAds from "../src/Components/Cards/MovieAds";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

const category = () => {
  const pageinstStyle = {
    direction: "ltr",
    margin: "20px 0 70px",
    "& *": { color: "var(--creemy) !important" },
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ContainerBox>
      <Box
        sx={{ height: { xs: "300px", sm: "350px", md: "450px", lg: "550px" } }}
      >
        <SlideShow>
          {arr.map((el) => (
            <SwiperSlide key={uuidv4()}>
              <MovieAds />
            </SwiperSlide>
          ))}
        </SlideShow>
      </Box>

      <CategoryCardContiner />
      <Box sx={flexStyle()}>
        <Pagination count={10} color="primary" sx={pageinstStyle} />
      </Box>
    </ContainerBox>
  );
};

export default category;
