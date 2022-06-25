import ContainerBox from "../src/Components/HOC/ContainerBox";
import Video from "../src/Components/MediaDetials/Video";
import Detials from "../src/Components/MediaDetials/Detials";
import ActorTeam from "../src/Components/MediaDetials/ActorsTeam";
import CardSlideShow from "../src/Components/comman/CardSlideShow";

const media = () => {
  return (
    <ContainerBox paddingAtTop={true}>
      <Detials />
      <ActorTeam />
      <Video />
      <CardSlideShow />
    </ContainerBox>
  );
};

export default media;
