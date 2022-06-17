import HomeHeader from "../src/Components/Home/HomeHeader/HomeHeader"
import Head from 'next/head'
import CardSlideShow from "../src/Components/comman/CardSlideShow"
import ContainerBox from "../src/Components/HOC/ContainerBox"
const Home =()=>{
    return (
        <>
          <Head>
            <title> Nostalega </title>
          </Head>
       
        <HomeHeader />
         
         <ContainerBox>
            <CardSlideShow />
            <CardSlideShow />
            <CardSlideShow />
            <CardSlideShow />
         </ContainerBox>
        </>
    )
}

export default Home