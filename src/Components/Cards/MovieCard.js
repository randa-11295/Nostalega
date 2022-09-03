import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonCustom from "../Comman/ButtonCustom";
import IconCustomButton from "../Comman/IconCustomButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlayIcon from "../Comman/PlayIcon";
import { useRouter } from "next/router";
import Photo from "../Comman/Photo"
const MovieCard = (props) => {

  const router = useRouter();

  const routeChangeHandel = (url) => {
    router.push(`shows/${url}`);
  };

  return (
    <Box onClick={()=>{routeChangeHandel(props.show._id || "")}} component="aside" sx={BoxStyle}>
      <Box sx={containImage}>
        <Photo title={props.show?.name || "e"} path={"https://i.ibb.co/1Q6hvC7/1514729978-670-28771.jpg"} />
      </Box>
     <Box>
      <Typography variant="h3" component="h3" sx={TextStyle}>
      {props.show.name || "اميرة حبي انا"}
      </Typography>

      <Typography variant="p" component="p" sx={pragStyle}>
      {props.show?.type || "فيلم"} -  {props?.show.date || "1880"}
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
  fontSize: "1.2rem",
  fontWeight: "800",
};

const pragStyle = {
  margin: "10px 0",
  fontFamily: "Noto Naskh Arabic",
  fontSize: ".8rem",
  fontWeight: "600",
  color: "var(--Grey)",
};
