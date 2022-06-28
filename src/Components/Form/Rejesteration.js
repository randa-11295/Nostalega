import HeadLine from "../Text/HeadLine";
import ButtonCustom from "../Comman/ButtonCustom";
import InputTextCustom from "../Comman/InputTextCustom";
import BtnIconNoDesc from "../Comman/BtnIconNoDesc";
import Typography from "@mui/material/Typography";
import CheckArea from "../Comman/CheckArea";
import formikCustom from "../../General/formikCustom";
import { logInSchema, signUpSchema } from "../../General/vaildationShema";
import { Box } from "@mui/material";
import { flexStyle } from "../../General/genralStyle";

const BoxStyle = {
  height: { xs: "95%", md: "80%", xl: "75%" },
  width: { xs: "100%", sm: "90%", md: "80%", lg: "55%" },
  padding: { xs: "30px 10% ", md: "15px " },
  ...flexStyle("space-evenly"),
  flexDirection: "column",
};

const textStyle = {
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
  name: "",
  email: "",
  password: "",
};

const Rejesteration = (props) => {
  const formikLog = formikCustom(login, logInSchema);
  const formikSign = formikCustom(sign, signUpSchema);

  let formik = props.log ? formikLog : formikSign;

  return (
    <Box sx={{ height: "100%", ...flexStyle() }}>
      <Box sx={BoxStyle} component="form" onSubmit={formik.handleSubmit}>
        <HeadLine red
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

        <Box sx={{ width: "100%", textAlign: "center", mb: 2 }}>
          {!props.log ? (
            <InputTextCustom formik={formik} name="name" label="الاسم" />
          ) : null}
          <InputTextCustom
            formik={formik}
            name="email"
            label="البريد الالكتروني"
          />
          <InputTextCustom
            formik={formik}
            name="password"
            pass={true}
            label="الرقم السري"
          />

          {props.log ? (
            <Box sx={{ ...flexStyle("space-evenly"), width: "100%" }}>
              <CheckArea />
              <Typography variant="p" component="p" sx={textStyle}>
                هل نسيت كلمة السر ؟
              </Typography>
            </Box>
          ) : null}
        </Box>

        <ButtonCustom submit={true} fullWidth={true}>
          تسجيل
        </ButtonCustom>
      </Box>
    </Box>
  );
};

export default Rejesteration;
