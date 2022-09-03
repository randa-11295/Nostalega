import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { flexStyle } from "../../src/General/genralStyle";
import ContainerBox from "../../src/Components/HOC/ContainerBox";
import SlideShow from "../../src/Components/HOC/SlideShow/SlideShow";
import CategoryCardContinuer from "../../src/Components/Category/CategoryCardContinuer";
import MovieAds from "../../src/Components/Cards/MovieAds";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { gql } from "@apollo/client";
import client from "../../src/ApolloClint/client";
import { getAllShows } from "../../src/ApolloClint/quieries";
import { useEffect } from "react";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const category = (props) => {
  const paginationStyle = {
    direction: "ltr",
    margin: "20px 0 70px",
    "& *": { color: "var(--creemy) !important" },
  };

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

      <CategoryCardContinuer shows={props.shows} />
      <Box sx={flexStyle()}>
        <Pagination count={10} color="primary" sx={paginationStyle} />
      </Box>
    </ContainerBox>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: getAllShows,
  });

  return {
    props: {
      shows: data.getShows,
    },
  };
}
export default category;
