import Typography from '@mui/material/Typography';
import Head from 'next/head'

export default function MainTitle() {
return (
<>
<Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Nastaliq+Urdu:wght@400;700&family=Raleway:wght@300;500;700&display=swap"
    rel="stylesheet" />
</Head>


<Typography variant="h1" component="h1"  sx={{ fontFamily: 'Noto Nastaliq Urdu', 
                                               textAlign : "center" ,  
                                               fontSize : {sm : '8rem' , md : '10rem'  , xl : "11rem" } ,
                                               color : "white"}} >      
    نوستاليجا
</Typography>


</>
)}