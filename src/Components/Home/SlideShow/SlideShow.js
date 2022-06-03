import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./SlideShow.module.css";
import { EffectFade,  Autoplay } from "swiper";
import Box from '@mui/material/Box';
import ahmedZakiy from "../../../../public/photos/HomeSlider/ahmedZakiy.png";
import omKulthom from "../../../../public/photos/HomeSlider/omKulthom.jpg";
import suad from "../../../../public/photos/HomeSlider/suad.jpg";
import Zbeda from "../../../../public/photos/HomeSlider/Zbeda.jpg";
import hend from "../../../../public/photos/HomeSlider/hend.jpg"

import Image from 'next/image'

export default function SlideShow() {
 
    const assets = [omKulthom , suad , ahmedZakiy , Zbeda ]

  return (
<Swiper autoplay={{ delay: 5000, disableOnInteraction: false, }} speed ={1500} 
 effect={"fade"}  className={classes.mySwiper} modules={[EffectFade, Autoplay ]}   
>
{assets.map((el)=>{
return (
    <SwiperSlide>      
            <Image layout="fill" objectFit="cover"  src={el} />
    </SwiperSlide>
 )})
}

</Swiper>
);
}
