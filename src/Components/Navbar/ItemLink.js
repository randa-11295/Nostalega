import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const ItemLink = (props) => {
  const itemStyle = {
    borderTop: { xs: "1px solid var(--creemy)", md: "none" },
    display: props.hiden ? { md: "none" } : "block",
  };

  return (
    <ListItem sx={itemStyle}>
      <ListItemButton
        onClick={() => {
          props.fun(props.url);
        }}
      >
        <ListItemText
          primary={<h4>{props.text}</h4>}
          sx={{ textAlign: "center" }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ItemLink;
