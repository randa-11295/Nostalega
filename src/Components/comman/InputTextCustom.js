import TextField from "@mui/material/TextField";

const InputTextCustom = (props) => {
  return (
    <TextField
      fullWidth
      helperText={props.text || " " }
      // error={true  }
      label={props.label}
      size="small"
      // name={props.name}
      // onBlur = {props.blur}
      // onChange={props.change}
      // value={props.val}
      // type ={props.type}
      // InputLabelProps={{
      //     style: { color: 'var(--creemy)', },
      //  }}
      sx={{
        fontSize: ".5rem",
        m: {
          mt:.5 ,
          color: "var(--creemy)",

          label: { color: "#f3f3f3a1" },
         
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff",
              borderRadius: "15px",
              pr: 3,
            },
          },
        },
      }}
    />
  );
};

export default InputTextCustom;
