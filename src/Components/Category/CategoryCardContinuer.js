import * as React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "../Cards/MovieCard";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function CategoryCardContinuer(props) {
  return (
    <Grid container sx={{ padding: "60px 0" }}>
      {props.shows?.map((el) => (
          <Grid
            component="main"
            key={el._id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ padding: "25px 15px" }}
          >
            <MovieCard show={el} />
          </Grid>
        )
      )}
    </Grid>
  );
}
