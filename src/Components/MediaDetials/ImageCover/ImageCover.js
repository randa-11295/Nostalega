import classes from "./ImageCover.module.css"

const ImageCover = () => {
    return <div className={classes.aboutSite}>
                <div className={classes.aboutSiteBanner}>
                    <div className={classes.content}>
                        <div>
                            <a href="assets/images/videos/vid.mp4" className={classes.videoBtn }>
                                <div className={classes.play}><i > +  </i></div>
                            </a>
                        </div>
                    </div>
                </div>  
            </div>
      
}


export default ImageCover
