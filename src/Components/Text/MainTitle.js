import Typography from "@mui/material/Typography";

export default function MainTitle(props) {
  const textStyle = {
    fontFamily: "Noto Nastaliq Urdu",
    margin: { xs: "90px 10px 50px", md: "0" },
    fontSize: { xs: "5rem", md: "6.8rem", xl: "7.5rem" },
  };

  return (
    <Typography variant={props.main ? "h1" : "h2" } component={props.main ? "h1" : "h2"} sx={textStyle}>
      {props.text}
    </Typography>
  );
}
