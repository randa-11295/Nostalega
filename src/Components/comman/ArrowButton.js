import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



 const iconStyle = {
    fontSize : {xs: "1.7rem" , md : "2rem"  , lg : "2.2rem"}
 }

export default function ArrowButton(props) {
return (
<IconButton color="secondary" aria-label="arrow" component="button" >
  { props.next ? <ArrowForwardIosIcon sx={iconStyle}  />  : <ArrowBackIosNewIcon sx={iconStyle} /> }
</IconButton>
 );
}
