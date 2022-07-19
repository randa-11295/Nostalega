import * as yup from "yup";

const stringVaild = yup
  .string()
  .required("مطلوب إجباري ")
  .min(3, "يجب ان تكون الكلمة مكونه من ثلاث احرف او اكثر")
  .matches(/^[a-zA-Z]+$/, "يجب ان يكون احرف");

const passVaild = yup
  .string()
  .required("مطلوب إجباري ")
  .min(8, "يجب ان تكون اكثر من 7 احرف");

const emailVaild = yup
  .string()
  .required("مطلوب إجباري ")
  .email("يجب ان يكون بريد الكتروني ");

const repass = yup
.string()
.required("مطلوب إجباري ")
.oneOf([yup.ref('password')], 'غير متطابق');

export const signUpSchema = yup.object().shape({
  name: stringVaild,
  email: emailVaild,
  password: passVaild,
  confirmPassword: repass , 

})
export const logInSchema = yup.object().shape({
  email: emailVaild,
  password: passVaild,
});
