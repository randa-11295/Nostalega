import Typography from '@mui/material/Typography';

const Headline =(props)=>{

 const textStyle ={ margin : {xs: " 35px 0 50px" , md: "0 0 55px"},
                     wordSpacing: ".5rem",
                    fontFamily: 'Noto Nastaliq Urdu',                 
                    fontSize : {xs : '2.2rem' ,  md : "2.5rem"  , lg : "2.9rem" } ,
}
return (
    <Typography variant="h3" component="h3"  sx={textStyle} >      
        {props.text}
    </Typography>   
)}

export default Headline
