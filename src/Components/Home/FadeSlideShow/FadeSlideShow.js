import Image from "next/image";
import classes from "./FadeSlideShow.module.css";
import ahmedZakiy from "../../../../public/photos/HomeSlider/ahmedZakiy.png";
import omKulthom from "../../../../public/photos/HomeSlider/omKulthom.jpg";
import suad from "../../../../public/photos/HomeSlider/suad.jpg";
import Zbeda from "../../../../public/photos/HomeSlider/Zbeda.jpg";
import hend from "../../../../public/photos/HomeSlider/hend.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SlideShow() {
  const assets = [omKulthom, suad, ahmedZakiy, Zbeda, hend];

  return (
    <Swiper
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      speed={1500}
      effect={"fade"}
      className={classes.mySwiper}
      modules={[EffectFade, Autoplay]}
    >
      {assets.map((el) => {
        return (
          <SwiperSlide key={uuidv4()}>
            <Image
              layout="fill"
              objectFit="cover"
              priority={true}
              alt="كلاسك صور "
              src={el}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
