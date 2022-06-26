import * as yup from "yup";

const stringVaild = yup
  .string()
  .required("مطلوب إجباري ")
  .min(3, "يجب ان تكون الكلمة مكونه من ثلاث احرف او اكثر")
  .matches(/^[a-zA-Z]+$/, "يجب ان يكون احرف");

const passVaild = yup
  .string()
  .required("مطلوب إجباري ")
  .min(8, "يجب ان تكون الكلمة السر مكونه من 8 احرف او اكثر");

const emailVaild = yup
  .string()
  .required("مطلوب إجباري ")
  .email("يجب ان يكون بريد الكتروني ");

export const signUpSchema = yup.object().shape({
  name: stringVaild,
  email: emailVaild,
  password: passVaild,
});

export const logInSchema = yup.object().shape({
  email: emailVaild,
  password: passVaild,
});
