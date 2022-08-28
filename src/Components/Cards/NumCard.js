import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const NumCard = () => {
  return (
    <Stack justifyContent="center" alignContent="center" sx={boxStyle}>
      <Typography variant="h3" component="h3" sx={numStyle}>
        560
      </Typography>

      <Typography variant="p" component="p" sx={TextStyle}>
        تمت مشاهدته
      </Typography>
    </Stack>
  );
};

export default NumCard;

const boxStyle = {
  background: "var(--creemy)",
  color: "black",
  width: "35%",
  height: { xs: "90px", sm: "120px", md: "130px", lg: "150px" },
  p: 1,
  borderRadius: "10px",
};

const TextStyle = {
  fontSize: "1rem",
};

const numStyle = {
  fontWeight: "800",
  fontSize: { xs: "1.2rem", sm: "2rem", md : "2.3rem"},
};
