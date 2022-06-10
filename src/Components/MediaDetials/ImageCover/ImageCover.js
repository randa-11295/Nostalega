import classes from "./ImageCover.module.css"
import bannar from "../../../../public/photos/HomeSlider/suad.jpg"
import Image from "next/image"

const ImageCover = () => {
return (
<section className={classes.box}>
  <Image objectFit="cover" alt="movie bannar " src={bannar} />
     <div className={classes.content}>
        
                    <aside className={classes.play}> +  </aside>
     </div>
            
</section>      
)}


export default ImageCover
