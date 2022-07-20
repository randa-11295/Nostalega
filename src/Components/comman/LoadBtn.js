import { LoadingButton } from "@mui/lab";

export default function LoadBtn(props) {

  const styleBtn = {
    width: "100%" ,

    boxShadow: "none",
    fontWeight: "700",
    zIndex: 1,  
    borderRadius: "15px",
    mr : 1 , 
    fontSize: "1.1rem",
    fontFamily: "Noto Naskh Arabic",
    "&:hover": {
      boxShadow: "none",
    },
    "&:disabled":{
      backgroundColor:"#8b2a2a"
  } ,
  "& *" : {
     color : "#fff"
  }
  };

  return (
    <LoadingButton
      sx={styleBtn}
      loading={props.loading || false} 
      variant="contained"
      type="submit"
    >
      تسجيل
    </LoadingButton>
  );
}
