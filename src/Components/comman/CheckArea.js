import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const CheckArea = () => {
  return (
    <FormControlLabel
      value="end"
      control={<Checkbox color="secondary" sx={{ color: "#fff " }} />}
      label="تذكرني"
    />
  );
};

export default CheckArea;
