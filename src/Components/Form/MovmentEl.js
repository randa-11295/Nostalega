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
    left: props.checked ? "0" : "115%",
  };

  const btnLogStyle = {
    position: "relative",
    textAlign: "center",
    width: "100% !important",
    transition: "1s",
    left: props.checked ? "-125%" : "0%",
  };

  const boxStyle = {
    textAlighn: "center",
    background: "rgba(0, 0, 0, 0.81)",
    margin: "auto",
    flexDirection: "column",
    ...flexStyle('space-evenly'),
    height: { xs: "100%" },
  };

  const btnStyle = {
    // width : '40%',
    boxShadow: "none",
    padding: "10px 30px",
    fontSize: "1.1rem",
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

  return (
    <Box sx={boxStyle}>
      <Box sx={{ display :{md: "none"} , mb: 2 }}>
        <HeadLine removeMargin={true} text=" اهلا في نوستاليجا" />
      </Box>
      <Box  sx={{ display :{xs : "none" , md: "flex" ,   
      flexDirection : "column" , height : "370px" ,textAlign :"center" , justifyContent : "space-around" } }}>
        <HeadLine removeMargin={true} text=" اهلا في " />
        <MainTitle />
      </Box>
      

      <Button
        sx={btnStyle}
        component="div"
        variant="outlined"
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
