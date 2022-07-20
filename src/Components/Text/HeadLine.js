import Typography from "@mui/material/Typography";

const Headline = (props) => {
  const textStyle = {
  
    margin: props.removeMargin ? 0 : { xs: " 35px 0 50px", md: "0 0 55px" },
    wordSpacing: ".5rem",
    fontFamily: "Noto Nastaliq Urdu",
    fontSize:props.big ? "3.5rem" : { xs: "2.2rem", md: "2.5rem", lg: "2.9rem" },
  };
  return (
    <Typography color={props.red ? "primary" : "secondary"} variant="h3" component="h3" sx={textStyle}>
      {props.text}
    </Typography>
  );
};

export default Headline;
