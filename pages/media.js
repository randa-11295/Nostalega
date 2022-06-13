import ContainerBox from "../src/Components/HOC/ContainerBox"
import Video from "../src/Components/MediaDetials/Video"
import Detials from "../src/Components/MediaDetials/Detials"
import ActorTeam from "../src/Components/MediaDetials/ActorsTeam"

const media =() =>{
    return(
         <ContainerBox paddingAtTop={true}  >
            <Detials />
            <ActorTeam />
            <Video />
        </ContainerBox >
    )
}


export default media