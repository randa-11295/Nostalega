import ContainerBox from "../src/Components/HOC/ContainerBox"
import Video from "../src/Components/MediaDetials/Video"
import Detials from "../src/Components/MediaDetials/Detials"





const media =() =>{
    return(
         <ContainerBox paddingAtTop={true} >
            <Detials />
    
            {/* <Video /> */}
        </ContainerBox >
    )
}


export default media