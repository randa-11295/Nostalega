import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    console.log("not support yet")
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (<  >
    <Button  
      onClick={handleClick}
      color="inherit"
    >
      دخول
    </Button  >

<Menu   

  anchorEl={anchorEl}
  id="account-menu"
  open={open}
  onClose={handleClose}
  onClick={handleClose}
  PaperProps={{
    elevation: 0,
    sx: {   background : "red" , 
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
        background : "yellow" , 
      },
     
    },
  }}
  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
  <MenuItem>
    <Avatar /> Profile
  </MenuItem>
  <MenuItem>
    <Avatar /> My account
  </MenuItem>
  <Divider />
  <MenuItem>
    <ListItemIcon>
      <PersonAdd fontSize="small" />
    </ListItemIcon>
    Add another account
  </MenuItem>
  <MenuItem>
    <ListItemIcon>
      <Settings fontSize="small" />
    </ListItemIcon>
    Settings
  </MenuItem>
  <MenuItem>
    <ListItemIcon>
      <Logout fontSize="small" />
    </ListItemIcon>
    Logout
  </MenuItem>
</Menu>
</>
);
}
