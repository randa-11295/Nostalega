import TextField from "@mui/material/TextField";

const styleInput = {
  mt: 1,
 
  color: "var(--creemy) !important",
  label: { color: "var(--creemy)" },
  "& input": {
    fontsize: ".5rem",
    textAlign : "center " ,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
      borderRadius: "15px",
      
    },
    // '& .MuiInput-input': {
    //   fontSize: 14,
    // },
  },
};
const InputTextCustom = (props) => {
  let isError =
    props.formik.touched[props.name] &&
    Boolean(props.formik.errors[props.name]);

  let textHelp =
    (props.formik.touched[props.name] && props.formik.errors[props.name]) ||
    " ";

  return (
    <TextField
      fullWidth
      size="small"
      label={props.label}
      value={props.formik.values[props.name]}
      onChange={props.formik.handleChange}
      onBlur={props.formik.handleBlur}
      error={isError}
      helperText={textHelp}
      name={props.name}
      type={props.pass ? "password" : "text"}
      FormHelperTextProps={{ style: { textAlign: "center" } }}
      sx={styleInput}
    />
  );
};

export default InputTextCustom;
