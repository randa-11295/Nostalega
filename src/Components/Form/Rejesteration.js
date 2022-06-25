import { Box } from "@mui/material";
import HeadLine from "../Text/HeadLine";
import IconCustomButton from "../Comman/IconCustomButton";
import InputTextCustom from "../Comman/InputTextCustom";
import ButtonCustom from "../Comman/ButtonCustom";
const Rejesteration = () => {
  return (
    <Box sx={{width : "80%" , hight : "100%" , background : "blue"}}>
      <HeadLine text="تسجيل دخول" />
      <Box>
        <IconCustomButton><i className="ri-facebook-fill"/></IconCustomButton>
        <IconCustomButton><i class="ri-google-fill"/></IconCustomButton>
      </Box>
      <Box>
        <InputTextCustom label="randa" />
        <InputTextCustom label="randa" />
        <InputTextCustom label="randa" />
      </Box>
      <ButtonCustom>تسجيل</ButtonCustom>
    </Box>
  );
};

export default Rejesteration;
