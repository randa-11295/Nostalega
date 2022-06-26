import classes from "./ImageCover.module.css";
import bannar from "../../../../public/photos/HomeSlider/suad.jpg";
import Photo from "../../Comman/photo";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";

const ImageCover = (props) => {
  return (
    <section className={classes.box}>
      <Photo path={bannar} />
      <div className={classes.content}>
        <IconButton onClick={props.changeVideo} className={classes.play}>
          <PlayArrowIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      </div>
    </section>
  );
};

export default ImageCover;
