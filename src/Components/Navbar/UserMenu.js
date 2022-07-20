import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const boxStyle = {
  width: 180,
  color: "black",
  position: "absolute",
  top: "100%",
  right: "0",
};

export default function TypographyMenu() {
  return (
    <Paper sx={boxStyle}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ClearAllIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            قائمتي
          </Typography>
        </MenuItem>
      
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit " noWrap>
            تعديل حسابي
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            تسجل خروج
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
