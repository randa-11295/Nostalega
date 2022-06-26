import { Box } from "@mui/material";
import HeadLine from "../Text/HeadLine";
import ButtonCustom from "../Comman/ButtonCustom";
import InputTextCustom from "../Comman/InputTextCustom";
import BtnIconNoDesc from "../Comman/BtnIconNoDesc";
import { flexStyle } from "../../General/genralStyle";

const BoxStyle = {
  height: { xs: "100%", md: "80%", xl: "75%" },
  width: { xs: "100%", sm: "90%", md: "80%" },
  padding: { xs: "30px 10% 15px", m: "15px " },
  ...flexStyle("space-evenly"),
  flexDirection: "column",
};

const Rejesteration = () => {
  return (
    <Box sx={{ height: "100%", ...flexStyle() }}>
      <Box sx={BoxStyle}>
        <HeadLine removeMargin={true} text="تسجيل دخول" />

        <Box sx={{ mt: 4, mb: 2 }}>
          <BtnIconNoDesc social={true}>
            <i className="ri-facebook-fill" />
          </BtnIconNoDesc>
          <BtnIconNoDesc social={true}>
            <i className="ri-google-fill" />
          </BtnIconNoDesc>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ width: "75%", margin: "auto" }}>
            <InputTextCustom label="randa" />
          </Box>
          <Box sx={{ width: "90%", margin: "auto" }}>
            <InputTextCustom label="randa" />
          </Box>
          <Box sx={{ width: "75%", margin: "auto" }}>
            <InputTextCustom label="randa" />
          </Box>
        </Box>

        <Box sx={{ width: "40%" }}>
          <ButtonCustom fullWidth={true}>تسجيل</ButtonCustom>
        </Box>
      </Box>
    </Box>
  );
};

export default Rejesteration;
