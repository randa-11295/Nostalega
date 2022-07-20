import  {useState} from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Fade from '@mui/material/Fade';

const boxStyle = {
  width: 190,
  position: "absolute",
  top: "100%",
  right: "0",
  background: "var(--lightBlack)",
  border: "1px solid var(--creemy)",
  padding: "5px 20% ",
  boxShadow: " 0px 0px 20px -10px  rgba(255,255,255,0.75)",
  borderRadius: "10px",
};

export default function UserMenu(props) {

  const [ open , setOpen]= useState(false) 

 const openToggelHandel =()=> {
    const isOpen = !open
    setOpen(isOpen)
  }

  return (
    <Box sx={{ position: "relative" ,display : {xs : "none" , md: "block"}}}>
      <ListItem>
        <ListItemButton onClick={openToggelHandel}>
          <ListItemText primary={<h4>حسابي</h4>} sx={{ textAlign: "center" }} />
        </ListItemButton>
      </ListItem>
        
      <Fade in={open}>
      <MenuList sx={boxStyle}>
        <MenuItem>
          <ListItemIcon sx={{ color: "text.primary" }}>
            <ClearAllIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            قائمتي
          </Typography>
        </MenuItem>

        <MenuItem>
          <ListItemIcon sx={{ color: "text.primary" }}>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit " noWrap>
            تعديل بياناتي
          </Typography>
        </MenuItem>
        <Divider sx={{ background: "#fff" }} />
        <MenuItem onClick={props.logOutFun}>
          <ListItemIcon sx={{ color: "text.primary" }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            تسجل خروج
          </Typography>
        </MenuItem>
      </MenuList>
      </Fade>
    </Box>
  );
}
