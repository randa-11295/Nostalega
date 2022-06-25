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

                    sx={{fontSize : ".5rem" , mt : .5 , mb : .5 , background : "#fff"}}

/> 

    )
}

export default InputTextCustom