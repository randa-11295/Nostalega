import TextField from '@mui/material/TextField';

const InputTextCustom = (props)=>{
    return (
        <TextField fullWidth  
                    // helperText={props.text }
                    // error={props.vaild  }
                    label={props.label } 
                    size="small"
                    // name={props.name} 
                    // onBlur = {props.blur}
                    // onChange={props.change}
                    // value={props.val}
                    // type ={props.type}
                    // InputLabelProps={{
                    //     style: { color: 'var(--creemy)', }, 
                    //  }}
                    sx={{fontSize : ".5rem" , mb :{xs : 1 , md : 3 , color : "var(--creemy)",
                   
                      "label": {color: "#f3f3f3a1"} , 
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#fff',
                          borderRadius: "15px" ,
                          pr : 3 ,
                        },
                        
                    }}
                   
                 
                }}

/> 

    )
}

export default InputTextCustom