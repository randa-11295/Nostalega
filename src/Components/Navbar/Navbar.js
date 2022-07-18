import NavbarMobile from "./NavbarMobile";
import NavbarTablet from "./NavbarTablet";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
const Navbar = () => {

  return (
    <Box>
      <NavbarTablet  />
      <NavbarMobile />
    </Box>
  );
};

export default Navbar;
