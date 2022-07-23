import HeadLine from "../Text/HeadLine";
import InputTextCustom from "../Comman/InputTextCustom";
import Typography from "@mui/material/Typography";
import CheckArea from "../Comman/CheckArea";
import LoadBtn from "../Comman/LoadBtn";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { flexStyle } from "../../General/genralStyle";
import { useDispatch } from "react-redux";
import { loginHandel } from "../../Redux/sliceReducers/rejesterSlice";
import { openHandel , closeHandel} from "../../Redux/sliceReducers/notificationsSlice";
import { useMutation } from "@apollo/client";
import { logInSchema, signUpSchema } from "../../General/vaildationShema";
import { addRejstrationQuiery, addLoginQuiery} from "../../ApolloClint/quieries";
import SnackAlart from "../Comman/SnackAlart";

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
  const dispatch = useDispatch();

  //   login login
  // *************************** //

  const formikLog = useFormik({
    initialValues: login,
    validationSchema: logInSchema,
    onSubmit: (values) => {
      console.log("log ", values);
      LogingReq();
    },
  });

  const [LogingReq, { loading: logingLoading }] = useMutation(addLoginQuiery, {
    variables: formikLog.values,
    onCompleted: (res) => {
      dispatch(loginHandel( res.login.token ));
    },
    onError: (err) => {
      errorHandel(err.message)
}
});

  

  //  logic sign
  // *************************** //

  const formikSign = useFormik({
    initialValues: sign,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("rej ", values);
      rejesteratioReq();
    },
  });

  const [rejesteratioReq, { loading: rejLoading }] = useMutation(
    addRejstrationQuiery,
    {
      variables: {
        registerInput: formikSign.values,
      },
      onCompleted: (res) => {
        console.log(res);
        formik.resetForm();
        dispatch(loginHandel({ payload: res.login.token }));
      },
      onError: (err) => {
        errorHandel(err.message)
      },
    }
  );

   // logic
  // *************************** //
  let formik = props.log ? formikLog : formikSign;

  const errorHandel=(msg)=>{
    let text = ""
    if (msg === "user not Found"){
      text = "حساب غير موجود" 
    }
   else if (msg === "email Aleady taken"){
      text = "حساب مسجل من قبل" 
    }
    else {  text = "يوجد مشكلة ما "  }

    console.log(msg)
    dispatch(openHandel( { msg :text, variant  :"error"}))
    setTimeout(()=>{  dispatch(closeHandel( ))} , 5000)
  }
   

  return (
    <Box sx={{ height: "100%", ...flexStyle() }}>
      <Box sx={BoxStyle} component="form" onSubmit={formik.handleSubmit}>
        <HeadLine
          red
          removeMargin
          text={props.log ? "تسجيل دخول" : "أنشاء حساب"}
        />

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
      <SnackAlart  />
    </Box>
  );
};

export default Rejesteration;
