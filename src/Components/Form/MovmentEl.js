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
    left: props.checked ? "0" : "110%",
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
    background: "rgba(0, 0, 0, 0.81)",
    margin: "auto",
    flexDirection: "column",
    ...flexStyle('space-evenly'),
    height: { xs: "100%" },
  };

  const btnStyle = {
    width : '160px',
    boxShadow: "none",
    padding: "12px 0",
    fontSize: "1.2rem",
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
        <HeadLine removeMargin={true} text="يومك سعيد" />
      </Box>

      <Box  sx={{ display :{xs : "none" , md: "flex" ,   
      flexDirection : "column" , height : "370px" ,textAlign :"center" , justifyContent : "space-around" } }}>
        <HeadLine removeMargin={true} text="يومك" />
        <MainTitle text="سعيد" />
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
