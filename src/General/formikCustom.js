import { useFormik } from "formik";

const formikCustom = (val, vaild) =>
  useFormik({
    initialValues: val,
    validationSchema: vaild,
    onSubmit: (values) => {
      console.log("test ", values);
      formik.resetForm();
    },
  });

export default formikCustom;
