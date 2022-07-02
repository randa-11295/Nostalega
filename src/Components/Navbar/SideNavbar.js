import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import RoutsLink from "./RoutesLinks";
import Logo from "../Text/Logo";

const listStyle = {
  width: 250,
  background: "var(--lightBlack)",
  color: "var(--creemy)",
  padding: "30px 5px",
  minHeight: "100%",
};


const routeData = [ {text : "دخول" , url:"/form"} ,
   {text :"نوادر" , url:"/"},  
   {text :"اغاني" , url: "/media"}, 
   {text : "افلام" , url:"/category"}
   ];

export default function SideNavbar(props) {
  return (
    <SwipeableDrawer
      anchor={"left"}
      open={props.right}
      onClose={() => {
        props.toggleDrawer(false);
      }}
      onOpen={() => {
        props.toggleDrawer(false);
      }}
    >
      <Box
        sx={listStyle}
        onClick={() => {
          props.toggleDrawer(false);
        }}
      >
        <Logo />
      
          
          <RoutsLink />
       
      </Box>
    </SwipeableDrawer>
  );
}
