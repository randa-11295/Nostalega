import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";

const ButtonCustom = (props) => {
  const styleBtn = {
    marginLeft: "15px",
    width : "100%" , 
    boxShadow: "none",
    fontWeight: "700",
    fontSize: "1.1rem",
    fontFamily: "Noto Naskh Arabic",
    "&:hover": {
      boxShadow: "none",
    },
  };

  return (
    <Fab 
      variant="extended"
      size={props.small ? "small" : ""}
      color="primary"
      aria-label="add"
      sx={styleBtn}
    >
      {props.children}
    </Fab>
  );
};

export default ButtonCustom;
