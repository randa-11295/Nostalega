import { useState } from "react";
import Box from "@mui/material/Box";
import Rejesteration from "../src/Components/Form/Rejesteration";
import bg from "../public/photos/HomeSlider/cinma.jpg"
import MovementEl from "../src/Components/Form/MovmentEl";

export default function Form(props) {
  const [checked, setChecked] = useState(true);

  const [left, setLeft] = useState("0%");
  const [top, setTop] = useState("0%");

  const [leftMoveEl, setLeftMoveEl] = useState("60%");
  const [topMoveEl, setTopMoveEl] = useState("70%");

  const movementChangeHandel = () => {
    const ischecked = !checked;

    if (checked) {
      setTop("30%");
      setLeft("40%");

      setLeftMoveEl("0");
      setTopMoveEl("0");
    } else {
      setTop("0%");
      setLeft("0%");

      setLeftMoveEl("60%");
      setTopMoveEl("70%");
    }

    setChecked(ischecked);
  };
  const movementElStyle = {
    width: { xs: "100%", md: "40%" },
    height: { xs: "30%", md: "100%" },
    position: "absolute",
    top: { xs: topMoveEl, md: "0%" },
    left: { xs: "0", md: leftMoveEl },
    zIndex: "4",
    transition: "1s ease-in-out top , 1s ease-in-out  left ",
    backgroundImage : `url(${bg.src})`,
    backgroundSize: {md : "cover"} ,
    backgroundAttachment: "fixed",
    backgroundPosition: "left ",
   
    animationDuration: "1s",
  };

  const boxStyle = {
    position: "relative",
    width: "100%",
    minHeight: "550px",
    height: { xs: "92.5vh", md: "100vh" },
    mt: { xs: 7, md: 0 },
    overflow: "hidden",
  };

  const formPartStyle = {
    transition: "1s ease-in-out all",
    width: { xs: "100%", md: "60%" },
    height: { xs: "70%", md: "100%" },
    position: "absolute",
  };



  return (
    <Box sx={boxStyle}>
      <Box component="aside" sx={movementElStyle}>
         <MovementEl movementChangeHandel={movementChangeHandel} checked={checked} />
      </Box>

      <Box
        sx={{
          left: { xs: "0", md: left },
          top: { xs: top, md: "0" },
          ...formPartStyle,
        }}
      >
        <Rejesteration />
      </Box>
    </Box>
  );
}
