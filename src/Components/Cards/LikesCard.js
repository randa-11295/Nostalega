import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonCustom from "../Comman/ButtonCustom";
import IconCustomButton from "../Comman/IconCustomButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlayIcon from "../Comman/PlayIcon";
import Photo from "../Comman/Photo";
import ClearIcon from "@mui/icons-material/Clear";

const MovieCard = () => {
  const BoxStyle = {
    borderRadius: "12px",
    color: "black",
    padding: "20px",
    textAlign: "left",
    border: "1px solid var(--creemy)",
    display: { sm: "flex" },
  };

  const containImage = {
    outline: "1px solid var(--Grey)",
    height: "130px",
    width: { xs: "100%", sm: "130px" },
    overflow: "hidden",
    borderRadius: "12px",
    marginRight: "25px",
  };

  const TextStyle = {
    marginTop: "15px",
    fontSize: "1.4rem",
    fontWeight: "800",
    color: "white",
  };

  const pragStyle = {
    margin: "13px 0",
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

          <IconCustomButton title="إضافة لقائمتي" small={true}>
            <ClearIcon />
          </IconCustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieCard;
