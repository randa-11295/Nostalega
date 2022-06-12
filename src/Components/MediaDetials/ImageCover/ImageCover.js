import classes from "./ImageCover.module.css"
import bannar from "../../../../public/photos/HomeSlider/suad.jpg"
import Photo from "../../comman/photo"

const ImageCover = () => {
return (
<section className={classes.box}>
     <Photo path={bannar} />
     <div className={classes.content}>
        <aside className={classes.play}> +  </aside>
     </div>
            
</section>      
)}


export default ImageCover
