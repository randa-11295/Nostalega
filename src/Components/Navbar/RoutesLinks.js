import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useRouter } from "next/router";
import { flexStyle } from "../../General/genralStyle";
import UserMenue from "./UserMenu"
import { useSelector } from "react-redux"
import { useEffect } from "react";

const routeData = [
  { text: "دخول", url: "/form" },
  { text: "معرض", url: "/category" },
  { text: "فيلم", url: "/media" },
  // { text: "مستخدم", url: "/user" },
];

const boxStyle= {
  padding: { xs: " 20px  10% 0", md: "0" },
  ...flexStyle(),
  flexDirection: { xs: "column", md: "row" },
  position : "reletive"
}

const RoutsLink = (props) => {
  const router = useRouter();

  const islogin = useSelector((state) => state.isLogin)
   
  useEffect(()=>{
    console.log(islogin)
  } , [islogin])

  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <List
      sx={boxStyle}
    >
      {routeData.map((el) => (
        <ListItem key={el.url} sx={{ borderTop: {xs :"1px solid var(--creemy)" , md : "none"} }}>
          <ListItemButton
            onClick={() => {
              handleClick(el.url);
            }}
          >
            <ListItemText primary={<h4>{el.text}</h4>} sx={{ textAlign: "center" , }} />
          </ListItemButton>
        </ListItem>
      ))}
      <UserMenue />
    </List>
  );
};

export default RoutsLink;
