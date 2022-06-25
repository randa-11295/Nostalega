import { Box } from "@mui/material";
import HeadLine from "../Text/HeadLine";
import IconCustomButton from "../Comman/IconCustomButton";
import InputTextCustom from "../Comman/InputTextCustom";
import ButtonCustom from "../Comman/ButtonCustom";
import {flexStyle } from "../../General/genralStyle"
const Rejesteration = () => {
  return (
    <Box sx={{height : "100%" , 
              padding :  "30px 10% 10px" ,
              ...flexStyle() , 
              flexDirection: 'column',
    }}>
      <HeadLine removeMargin={true} text="تسجيل دخول" />
      <Box sx={{mt : 3}}>
        <IconCustomButton title="أنشاء حساب ياستخدام فيسبوك"  social={true} >
            <i className="ri-facebook-fill"/>
            </IconCustomButton>
        <IconCustomButton title="أنشاء حساب ياستخدام فيسبوك"  social={true} >
            <i class="ri-google-fill"/>
        </IconCustomButton>
      </Box>
      <Box>
        <InputTextCustom label="randa" />
        <InputTextCustom label="randa" />
        <InputTextCustom label="randa" />
      </Box>
       <Box sx={{width : "65%"}} >
       <ButtonCustom>تسجيل</ButtonCustom>
      </Box>
    </Box>
  );
};

export default Rejesteration;
