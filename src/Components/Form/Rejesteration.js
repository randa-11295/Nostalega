import { Box } from "@mui/material";
import HeadLine from "../Text/HeadLine";
import ButtonCustom from "../Comman/ButtonCustom";
import InputTextCustom from "../Comman/InputTextCustom";
import BtnIconNoDesc from "../Comman/BtnIconNoDesc";
import { flexStyle } from "../../General/genralStyle";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import {logInSchema , signUpSchema} from "../../General/vaildationShema"

const BoxStyle = {
  height: { xs: "100%", md: "80%", xl: "75%" },
  width: { xs: "100%", sm: "90%", md: "80%" },
  padding: { xs: "30px 10% ", md: "15px " },
  ...flexStyle("space-evenly"),
  flexDirection: "column",
};

const textStyle = {
  margin: "auto !important",
  cursor: "pointer",
  display: "inline-block",
  borderBottom: "1px solid var(--creemy)",
  transition: ".3s",
  fontSize: ".8rem",
  "&:hover": {
    color: "var(--smoothRed)",
    borderBottom: "1px solid var(--smoothRed)",
  },
};

const login = {
  email: "",
  password: "",
};
const sign = {
  name : "" ,
  email: "",
  password: "",
};

const Rejesteration = (props) => {
  const formik = useFormik({
    initialValues: (props.log ? login : sign),
    // validationSchema: (props.log ? logInSchema : signUpSchema),
    onSubmit: (values) => {
      console.log("submit ", values);
      console.log("submit ", props.log );
      formik.resetForm();
    },
  });
  return (
    <Box sx={{ height: "100%", ...flexStyle() }}>
      <Box sx={BoxStyle} component="form" onSubmit={formik.handleSubmit}>
        <HeadLine
          removeMargin={true}
          text={props.log ? "تسجيل دخول" : "أنشاء حساب"}
        />

        <Box sx={{ mt: 4, mb: 2 }}>
          <BtnIconNoDesc social={true}>
            <i className="ri-facebook-fill" />
          </BtnIconNoDesc>
          <BtnIconNoDesc social={true}>
            <i className="ri-google-fill" />
          </BtnIconNoDesc>
        </Box>

        <Box sx={{ width: "100%", textAlign: "center" }}>
          {!props.log ? (
            <Box sx={{ width: "75%", margin: "auto" }}>
              <InputTextCustom formik={formik} name="name" label="الاسم" />
            </Box>
          ) : null}
          <Box sx={{ width: "90%", margin: "auto" }}>
            <InputTextCustom formik={formik} name="email" label="البريد الاليكتروني" />
          </Box>
          <Box sx={{ width: "75%", margin: "auto" }}>
            <InputTextCustom formik={formik} name="password" pass={true} label="الرقم السري" />
          </Box>

          {props.log ? (
            <Typography variant="p" component="p" sx={textStyle}>
              هل نسيت كلمة السر ؟
            </Typography>
          ) : null}
        </Box>

        <Box sx={{ width: "40%", mt: 1 }}>
          <ButtonCustom  submit={true} fullWidth={true}>تسجيل</ButtonCustom>
        </Box>
      </Box>
    </Box>
  );
};

export default Rejesteration;
