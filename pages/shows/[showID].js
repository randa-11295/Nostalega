import ContainerBox from "../../src/Components/HOC/ContainerBox";
import Video from "../../src/Components/MediaDetials/Video";
import Detials from "../../src/Components/MediaDetials/Detials";
import ActorTeam from "../../src/Components/MediaDetials/ActorsTeam";
import CardSlideShow from "../../src/Components/Comman/CardSlideShow";
import { ShowChart } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { gql } from "@apollo/client";
import client from "../../src/ApolloClint/client";
import { getSingleShow } from "../../src/ApolloClint/quieries";

const show = (props) => {
  const router = useRouter();

  const { showID } = router.query;

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <ContainerBox paddingAtTop={true}>
      <Detials />
      <ActorTeam />
      <Video />
      {/* <CardSlideShow /> */}
    </ContainerBox>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { showID: "62f7cdd05165a0c90aa3b389" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: getSingleShow,
    variables: {
      showId: context?.params?.showID,
    },
  });

  return {
    props: {
      show: data,
    },
  };
}
// params
export default show;
