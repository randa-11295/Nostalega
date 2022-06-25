import Fab from "@mui/material/Fab";

const ButtonCustom = (props) => {
  const styleBtn = {
    marginLeft: "15px",
    width : (props.fullWidth ?"100%" : "auto" ), 
    boxShadow: "none",
    fontWeight: "700",
    zIndex :1 ,
    fontSize: "1.1rem",
    fontFamily: "Noto Naskh Arabic",
    "&:hover": {
      boxShadow: "none",
    },
  };

  return (
    <Fab  component="button"
      onClick={props.clickHandel}
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
