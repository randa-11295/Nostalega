import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";


const staticBtn = {
  color: "primary.main",
  border: "solid 1px var(--smoothRed)",
};

const hoverBtn = {
  ml : 1,
  mr: 1,
  color: "secondary.main",
  border: "solid 1px var(--creemy)",
  transition: ".3s ease-in-out all",
  "&:hover": {
    border: "solid 1px var(--smoothRed)",
    color: "primary.main",
  },
};

export default function IconCustomButton(props) {
  return (
    <Tooltip title={props.title || "اضافة"}
      placement={props.small ? "left" : "bottom"}
    >
       <IconButton
      size={props.small ? "small" : ""}
      sx={props.red ? staticBtn : hoverBtn}
    >
      
      {props.children}
    </IconButton>
    </Tooltip>
  );
}
