import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { v4 as uuid } from "uuid";

const ChipStyle = {
  marginLeft: { xs: "6px", sm: "10px" },
  marginTop: "8px",
  padding: "0px 3px",
  fontFamily: "Noto Naskh Arabic",
};

export default function TypeDetils() {
  const typsMovie = ["رومانسي", "كوميدي", "كوميدي", "دراما"];

  return (
    <Box sx={{ padding: { xs: "15px", md: "15px 0 20px" } }}>
      {typsMovie.map((el) => {
        return (
          <Chip
            key={uuid()}
            sx={ChipStyle}
            label={el}
            variant="outlined"
            color="secondary"
          />
        );
      })}
    </Box>
  );
}
