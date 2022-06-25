import { useState } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
// import  bg  from '../assists/bgKatchan.jpg'
import SignUpForm from '../src/Components/Form/Rejesteration';
import Rejesteration from "../src/Components/Form/Rejesteration";

export default function Form(props) {
  //toggel betweenform
  const [checked, setChecked] = useState(false);
  const [TopMovementEl, setTopMovementEl] = useState("60%");
  const [LeftMovementEl, setLeftMovementEl] = useState("60%");

  const [fristLeft, setfristLeft] = useState("0%");
  const [secLeft, setSecLeft] = useState("60%");

  const [fristTop, setfristTop] = useState("0%");
  const [secTop, setSecTop] = useState("60%");

  const movementChange = () => {
    setChecked((prev) => !prev);

    if (!checked) {
      setTopMovementEl("0%");
      setLeftMovementEl("0%");

      setfristLeft("100%");
      setSecLeft("40%");

      setfristTop("100%");
      setSecTop("40%");
    } else {
      setTopMovementEl("60%");
      setLeftMovementEl("60%");

      setfristLeft("0%");
      setSecLeft("60%");

      setfristTop("0%");
      setSecTop("60%");
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
    height: "100vh",
    overflow: "hidden",
    background: "blue",
  };

  const formPartStyle = {
    transition: "1s ease-in-out all",
    // background : "red" ,
    width: { xs: "100%", md: "60%" },
    height: { xs: "60%", md: "100%" },
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
          backgroundColor: "green",
          ...formPartStyle,
        }}
      >
        <Rejesteration />
     
      </Box>

      <Box
        sx={{
          left: { xs: "0", md: secLeft },
          top: { xs: secTop, md: "0" },
          ...formPartStyle,
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempor e
        explicabo laborum, corporis dolorem maxime minima alias! Dignissimos
        alias sint ab corrupti recusandae libero vero! Fugiat perspiciatis id
        nulla aliquid esse. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Tempor e explicabo laborum, corporis dolorem maxime minima alias!
        Dignissimos alias sint ab corrupti recusandae libero vero! Fugiat
        perspiciatis id nulla aliquid esse.
      </Box>
    </Box>
  );
}
