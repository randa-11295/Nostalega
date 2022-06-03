import Navbar from "../src/Components/Navbar/Navbar"
import HomeHeader from "../src/Components/Home/HomeHeader"
import Head from 'next/head'
const Home =()=>{
    return (
        <>
          <Head>
            <title> Nostalega </title>
           </Head>
        <Navbar />
        <HomeHeader />
        <p>راندا محمد</p>
        </>
    )
}

export default Home