import IconButton from "@mui/material/IconButton";

export default function BtnIconNoDesc(props) {
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

  return (
    <IconButton
      size={props.small ? "small" : ""}
      sx={props.small ? staticBtn : hoverBtn}
    >
      {props.children}
    </IconButton>
  );
}
