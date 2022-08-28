import NavbarMobile from "./NavbarMobile";
import NavbarTablet from "./NavbarTablet";
import Box from '@mui/material/Box';

const Navbar = () => {


  return (
    <Box>
      <NavbarTablet  />
      <NavbarMobile />  
    </Box>
  );
};

export default Navbar;
