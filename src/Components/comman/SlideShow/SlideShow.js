import { Swiper } from "swiper/react";
import { useRef  } from "react";
import { Navigation, Autoplay} from "swiper";
import classes from "./SlideShow.module.css";
import ArrowButton from "../ArrowButton"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const SlideShow = (props) =>{

 const responsive= { 768: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }

  }



const navigationPrevRef = useRef(null)
const navigationNextRef = useRef(null)

const clickHandel = (swiper) => {
    swiper.params.navigation.prevEl = navigationPrevRef.current
    swiper.params.navigation.nextEl = navigationNextRef.current
    swiper.navigation.destroy()
    swiper.navigation.init()
    swiper.navigation.update()
}

return (
  
<section   className={classes.box }  >

  <Swiper className={classes.swiper }   
          navigation={{ prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current, }}
          loop={true}
          pagination={{   clickable:  true, }}
          breakpoints={ (props.parts ? responsive : {}) }
          slidesPerView="auto"
          modules={[ Navigation, Autoplay]}
          onInit={clickHandel}  
          speed ={1500}
          autoplay={ (props.parts ?  false :  { delay: 5000, disableOnInteraction: false, })}  >

      {props.children} 


  </Swiper>
    <div className={classes.next + " " + (props.parts ? classes.moveRight  : "")} ref={navigationNextRef} >
         <ArrowButton next={true} />
     </div>

    <div className={classes.prev + " " +  (props.parts ? classes.moveLeft  : "")} ref={navigationPrevRef} > 
         <ArrowButton next={false} />
     </div>

     </section>
);
}


export default SlideShow