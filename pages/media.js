import ContainerBox from "../src/Components/HOC/ContainerBox"
import Video from "../src/Components/MediaDetials/Video"
import Detials from "../src/Components/MediaDetials/Detials"
import ImageCover from "../src/Components/MediaDetials/ImageCover/ImageCover"




const media =() =>{
    return(
         <ContainerBox paddingAtTop={true} >
            <Detials />
             
             <ImageCover />
            <Video />
        </ContainerBox >
    )
}


export default media