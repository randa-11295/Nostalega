import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonCustom from "../Comman/ButtonCustom";
import IconCustomButton from "../Comman/IconCustomButton";
import PlayIcon from "../Comman/PlayIcon";
import Photo from "../Comman/Photo";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ClearIcon from "@mui/icons-material/Clear";

const MovieCard = () => {
  const BoxStyle = {
    borderRadius: "12px",
    color: "black",
    padding: "15px ",
    textAlign: "left",
    border: "1px solid var(--creemy)",
    display: "flex" ,
    mb: 4
  };

  const containImage = {
    outline: "1px solid var(--Grey)",
    height: "100px",
    width:  "100px" ,
    overflow: "hidden",
    borderRadius: "12px",
    marginRight: "15px",
  };

  const TextStyle = {
    fontSize: "1.4rem",
    fontWeight: "800",
    color: "white",
    marginTop:"5px" , 
  };

  const pragStyle = {
    margin: "7px 0",
    fontFamily: "Noto Naskh Arabic",
    fontSize: ".7rem",
    fontWeight: "600",
    color: "var(--Grey)",
  };

  return (
    <Box component="aside" sx={BoxStyle}>
      <Box sx={containImage}>
        <Photo
          title="cart cover"
          path={
            "https://i.ibb.co/7K7k7Tq/colourful-dynamic-flow-wallpaper-52683-42965.jpg"
          }
        />
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

          <IconCustomButton title="إزاله من قائمتي" small={true}>
            <ClearIcon sx={{fontSize : "1.1rem"}} />
          </IconCustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieCard;
