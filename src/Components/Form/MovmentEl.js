import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MainTitle from "../Text/MainTitle";
import HeadLine from "../Text/HeadLine";
import { flexStyle } from "../../General/genralStyle";

const MovementEl = (props) => {
  const btnSignStyle = {
    position: "absolute",
    width: "100% !important",
    textAlign: "center",
    transition: "1s",
    left: props.checked ? "0" : "105%",
  };

  const btnLogStyle = {
    position: "relative",
    textAlign: "center",
    width: "100% !important",
    transition: "1s",
    left: props.checked ? "-110%" : "0%",
  };

  const boxStyle = {
    textAlighn: "center",
    background: "rgba(0, 0, 0, 0.75)" ,
    margin: "auto",
    flexDirection: "column",
    ...flexStyle(),
    height: { xs: "100%" },
  };

  const btnStyle = {
  width : '60%', 
  boxShadow: "none",
  fontWeight: "700",
  overflow : "hidden" , 
  borderRadius: "20px",
  fontFamily: "Noto Naskh Arabic",
  "&:hover": {
    boxShadow: "none",
  }}

  return (
    <Box sx={boxStyle}>
      <HeadLine removeMargin={true} text=" اهلا في نوستاليجا" />
      {/* <MainTitle /> */}

      <Button sx= {btnStyle}
        component="div"
        variant="contained"
        color="secondary"      
        onClick={props.movementChangeHandel}
      >
        <Box sx={btnSignStyle}>أنشاء حساب</Box>
        <Box sx={btnLogStyle}>دخول الي حسابك</Box>
      </Button>
    </Box>
  );
};

export default MovementEl;
