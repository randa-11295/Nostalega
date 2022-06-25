import { useState } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
// import  bg  from '../assists/bgKatchan.jpg'
import Rejesteration from "../src/Components/Form/Rejesteration";

export default function Form(props) {
  //toggel betweenform
  const [checked, setChecked] = useState(false);
  const [TopMovementEl, setTopMovementEl] = useState("70%");
  const [LeftMovementEl, setLeftMovementEl] = useState("70%");

  const [fristLeft, setfristLeft] = useState("0%");
  const [secLeft, setSecLeft] = useState("70%");

  const [fristTop, setfristTop] = useState("0%");
  const [secTop, setSecTop] = useState("70%");

  const movementChange = () => {
    setChecked((prev) => !prev);

    if (!checked) {
      setTopMovementEl("0%");
      setLeftMovementEl("0%");

      setfristLeft("100%");
      setSecLeft("30%");

      setfristTop("100%");
      setSecTop("30%");
    } else {
      setTopMovementEl("70%");
      setLeftMovementEl("70%");

      setfristLeft("0%");
      setSecLeft("70%");

      setfristTop("0%");
      setSecTop("70%");
    }
  };

  const movementElStyle = {
    background: "red",
    width: { xs: "100%", md: "40%" },
    height: { xs: "40%", md: "100%" },
    position: "absolute",
    top: { xs: TopMovementEl, md: "0%" },
    left: { xs: "0", md: LeftMovementEl },
    zIndex: "4",
    transition: "1s ease-in-out top , 1s ease-in-out  left ",
    background: "red",
    // backgroundImage : `url(${bg})`,
    backgroundSize: { xs: "auto 100vh", md: "100vw auto" },
    backgroundAttachment: "fixed",
    backgroundPosition: "top center",
    padding: "100px",
    opacity: ".5",
  };

  const boxStyle = {
    position: "relative",
    width: "100%",
    minHeight : "550px",
    height: "91vh",   
    mt : 7 , 
    overflow: "hidden",
  };

  const formPartStyle = {
    transition: "1s ease-in-out all",
    width: { xs: "100%", md: "70%" },
    height: { xs: "70%", md: "100%" },
    position: "absolute",
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={movementElStyle}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={movementChange} />}
          label="Show"
        />
      </Box>

      <Box
        sx={{
          left: { xs: "0", md: fristLeft },
          top: { xs: fristTop, md: "0" },
          ...formPartStyle,
        }}
      >
        <Rejesteration />
     
      </Box>

      
      
    </Box>
  );
}
