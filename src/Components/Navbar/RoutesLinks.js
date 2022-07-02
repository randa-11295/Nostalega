import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useRouter } from "next/router";
import { flexStyle } from "../../General/genralStyle";
import { v4 as uuid } from "uuid";

const routeData = [
  { text: "دخول", url: "/form" },
  { text: "نوادر", url: "/" },
  { text: "اغاني", url: "/media" },
  { text: "افلام", url: "/category" },
];

const boxStyle= {
  padding: { xs: " 20px  10% 0", md: "0" },
  ...flexStyle(),
  flexDirection: { xs: "column", md: "row" },
}

const RoutsLink = (props) => {
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <List
      sx={boxStyle}
    >
      {routeData.map((el) => (
        <ListItem key={el.url} sx={{ borderTop: "1px solid var(--creemy)" }}>
          <ListItemButton
            onClick={() => {
              handleClick(el.url);
            }}
          >
            <ListItemText primary={el.text} sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default RoutsLink;
