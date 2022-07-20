import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import pathImg from "../../../public/photos/HomeSlider/bannar.jpg";
import ButtonCustom from "../Comman/ButtonCustom";
import IconCustomButton from "../Comman/IconCustomButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlayIcon from "../Comman/PlayIcon";
import Photo from "../Comman/Photo";

const MovieCard = () => {
  const BoxStyle = {
    background: "var(--creemy)",
    width: "260px",
    borderRadius: "12px",
    color: "black",
    padding: "20px",
    margin: "auto",
    textAlign : "left" , 

  };

  const containImage = {
    outline: "1px solid var(--Grey)",
    height: "200px",
    overflow: "hidden",
    margin: "auto",
    borderRadius: "12px",
  };

  const TextStyle = {
    marginTop: "15px",
    fontSize: "1.8rem",
    fontWeight: "800",
  };

  const pragStyle = {
    margin: "10px 0",
    fontFamily: "Noto Naskh Arabic",
    fontSize: ".8rem",
    fontWeight: "600",
    color: "var(--Grey)",
  };

  return (
    <Box component="aside" sx={BoxStyle}>
      <Box sx={containImage}>
        <Photo title="cart cover" path={"https://i.ibb.co/7K7k7Tq/colourful-dynamic-flow-wallpaper-52683-42965.jpg"} />
      </Box>
     <Box>
      <Typography variant="h3" component="h3" sx={TextStyle}>
        أميرة حبي انا
      </Typography>

      <Typography variant="p" component="p" sx={pragStyle}>
        فيلم . موسم واحد . 1977
      </Typography>

      <Box>
        <ButtonCustom small={true}>
          مشاهدة
          <PlayIcon />
        </ButtonCustom>

        <IconCustomButton title="إضافة لقائمتي" small={true} red={true} >
          <PlaylistAddIcon />
        </IconCustomButton>
      </Box>
    </Box>
    </Box>
  );
};

export default MovieCard;
