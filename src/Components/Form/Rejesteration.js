import { Box } from "@mui/material";
import HeadLine from "../Text/HeadLine";
import ButtonCustom from "../Comman/ButtonCustom";
import InputTextCustom from "../Comman/InputTextCustom";
import BtnIconNoDesc from "../Comman/BtnIconNoDesc";
import { flexStyle } from "../../General/genralStyle";

const BoxStyle = {
  height: { xs: "100%", md: "80%", xl: "75%" },
  width: { sm: "70%", md: "60%" },
  padding: { xs: "30px 10% 10px", md: "15px" },
  ...flexStyle("space-evenly"),
  flexDirection: "column",
};

const Rejesteration = () => {
  return (
    <Box sx={{ height: "100%", ...flexStyle() }}>
      <Box sx={BoxStyle}>
        <HeadLine removeMargin={true} text="تسجيل دخول" />
        <Box sx={{ mt: 3 }}>
          <BtnIconNoDesc social={true}>
            <i className="ri-facebook-fill" />
          </BtnIconNoDesc>
          <BtnIconNoDesc social={true}>
            <i className="ri-google-fill" />
          </BtnIconNoDesc>
        </Box>
        <Box>
          <InputTextCustom label="randa" />
          <InputTextCustom label="randa" />
          <InputTextCustom label="randa" />
        </Box>
        <Box sx={{ width: "65%" }}>
          <ButtonCustom fullWidth={true}>تسجيل</ButtonCustom>
        </Box>
      </Box>
    </Box>
  );
};

export default Rejesteration;
