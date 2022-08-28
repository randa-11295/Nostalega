import ContainerBox from "../src/Components/HOC/ContainerBox";
import LikesCard from "../src/Components/Cards/LikesCard";
import NumCard from "../src/Components/Cards/NumCard";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

const user = () => {
  return (
    <ContainerBox>
      <p style={{ padding: "100px 0 0" }}> </p>
      <Stack
        sx={{ pb: 4 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <NumCard />
        <NumCard />
        <NumCard />
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <LikesCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LikesCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LikesCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LikesCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LikesCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <LikesCard />
        </Grid>
      </Grid>
    </ContainerBox>
  );
};

export default user;
