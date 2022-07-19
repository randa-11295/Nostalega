import HeadLine from "../Text/HeadLine";
import ButtonCustom from "../Comman/ButtonCustom";
import InputTextCustom from "../Comman/InputTextCustom";
import BtnIconNoDesc from "../Comman/BtnIconNoDesc";
import Typography from "@mui/material/Typography";
import CheckArea from "../Comman/CheckArea";
import LoadBtn from "../Comman/LoadBtn";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { flexStyle } from "../../General/genralStyle";
import { useMutation } from "@apollo/client";
import { logInSchema, signUpSchema } from "../../General/vaildationShema";
import { addRejstrationQuiery , addLoginQuiery } from "../../ApolloClint/quieries"
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
  confirmPassword: "",
};

const Rejesteration = (props) => {

  const formikLog = useFormik({
    initialValues: login,
    validationSchema: logInSchema,
    onSubmit: (values) => {
      console.log("log ", values);
      LogingReq()
    },
  });

const [LogingReq  , {loading: logingLoading }] = useMutation(
  addLoginQuiery , 
    { variables:  formikLog.values ,
      onCompleted: (res) => {
        console.log(res)
      },
      onError : (err)=>{
        console.log(err)
      }   
    }
  );


  const formikSign = useFormik({
    initialValues: sign,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("rej ", values);
      rejesteratioReq()
    },
  });

  const [rejesteratioReq , {loading: rejLoading  }] = useMutation(
    addRejstrationQuiery , 
    {
      variables: {
        registerInput: formikSign.values
      },
      onCompleted: (res) => {
        console.log(res)
        formik.resetForm()
      },
      onError : (err)=>{
        console.log(err)
      }   
    }
  );



  
 

  let formik = props.log ? formikLog : formikSign;

  return (
    <Box sx={{ height: "100%", ...flexStyle() }}>
      <Box sx={BoxStyle} component="form" onSubmit={formik.handleSubmit}>
        <HeadLine
          red
          removeMargin
          text={props.log ? "تسجيل دخول" : "أنشاء حساب"}
        />

        {/* <Box sx={{ mt: 4, mb: 2 }}>
          <BtnIconNoDesc social={true}>
            <i className="ri-facebook-fill" />
          </BtnIconNoDesc>
          <BtnIconNoDesc social={true}>
            <i className="ri-google-fill" />
          </BtnIconNoDesc>
        </Box> */}

        <Box sx={{ width: "100%", textAlign: "center", mt: 2 }}>
          {!props.log ? (
            <InputTextCustom formik={formik} name="name" label="الاسم" />
          ) : null}
          <InputTextCustom
            formik={formik}
            name="email"
            label="البريد الالكتروني"
          />
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                paddingRight: !props.log ? "5px" : "0",
                width: "100%",
              }}
            >
              <InputTextCustom
                formik={formik}
                name="password"
                pass={true}
                label="كلمة السر"
              />
            </Box>
            {!props.log ? (
              <Box sx={{ paddingLeft: "5px", width: "100%" }}>
                <InputTextCustom
                  formik={formik}
                  pass={true}
                  name="confirmPassword"
                  label="تأكيد كلمة السر"
                />
              </Box>
            ) : null}
          </Box>
          {props.log ? (
            <Box sx={{ ...flexStyle("space-evenly"), width: "100%" }}>
              <CheckArea />
              <Typography variant="p" component="p" sx={textStyle}>
                هل نسيت كلمة السر ؟
              </Typography>
            </Box>
          ) : null}
        </Box>
    <LoadBtn loading={logingLoading || rejLoading} />
    
      </Box>
    </Box>
  );
};

export default Rejesteration;
