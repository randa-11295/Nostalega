import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { flexStyle } from "../../General/genralStyle.js";
import Logo from "../Text/Logo";
import ContainerBox from "../HOC/ContainerBox";
import SearchInputTablet from "../Comman/searchInputTablet/SearchInputTablet";
import RoutsLink from "./RoutesLinks.js";
import LinearProgress from '@mui/material/LinearProgress';

export default function NavbarTablet(props) {
  const [colorChange, setColorchange] = useState("var(--lightBlack)");

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY <= 40) {
        let numHightY = window.scrollY / 40;
        setColorchange(`rgba(21, 21, 21,${numHightY});`);
      } else {
        setColorchange("var(--lightBlack)");
      }
    };

    changeNavbarColor();

    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  });

  return (
    <AppBar
      component="nav"
      sx={{
        background: colorChange,
        boxShadow: "none",
        transition: ".3s",
        display: { xs: "none", md: "block" },
      }}
    >

      {/* <LinearProgress  /> */}
      <ContainerBox>
        <Toolbar
          sx={{ ...flexStyle("space-between"), padding: "0px !important" }}
        >
          <Logo />
          <Box sx={{ width: "40%" }}>
            {/* <SearchInputTablet /> */}
          </Box>
          <RoutsLink />
        </Toolbar>
      </ContainerBox>
    </AppBar>
  );
}
