import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MainTitle from "../Text/MainTitle";
import HeadLine from "../Text/HeadLine";
import { flexStyle } from "../../General/genralStyle";
import Typography from "@mui/material/Typography";

const textStyle = {
  fontFamily: "Noto Nastaliq Urdu",
  fontSize: { md: "10rem", lg: "12rem" },
  padding: "0",
  lineHeight: "9rem",
};

const boxStyle = {
  textAlighn: "center",
  background: "rgba(0, 0, 0, 0.81)",
  margin: "auto",
  flexDirection: "column",
  ...flexStyle("space-around"),
  height: { xs: "100%" },
  padding: { md: "40px 0" },
};

const btnStyle = {
  width: "160px",
  boxShadow: "none",
  padding:{xs : "5px 0" , md : "12px 0"},
  fontSize: {xs : ".9rem" , md : "1.2rem"},
  fontWeight: "800",
  overflow: "hidden",
  borderRadius: "30px ",
  border: 2,
  fontFamily: "Noto Naskh Arabic",
  "&:hover": {
    boxShadow: "none",
    border: 2,
  },
};

const MovementEl = (props) => {
  const btnSignStyle = {
    position: "absolute",
    width: "100% !important",
    textAlign: "center",
    transition: "1s",
    left: props.checked ? "0" : "110%",
  };

  const btnLogStyle = {
    position: "relative",
    textAlign: "center",
    width: "100% !important",
    transition: "1s",
    left: props.checked ? "-110%" : "0%",
  };



  return (
    <Box sx={boxStyle}>
      <Box sx={{ display: { md: "none" }, mb: 2 }}>
        <HeadLine big removeMargin text="يومك سعيد" />
      </Box>

      <Box sx={{ display: { xs: "none", md: "block" }, textAlign: "center" }}>
        <HeadLine removeMargin={true} text="يومك" />
        <Typography
          variant= "h2"
          component="h2"
          sx={textStyle}
        >
          سعيد
        </Typography>
      </Box>

      <Button
        sx={btnStyle}
        component="div"
        variant="outlined"
        color="secondary"
        onClick={props.movementChangeHandel}
      >
        <Box sx={btnSignStyle}>مستخدم جديد</Box>
        <Box sx={btnLogStyle}> لديك حساب </Box>
      </Button>
    </Box>
  );
};

export default MovementEl;
