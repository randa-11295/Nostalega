import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';




export default function ArrowButton(props) {
return (
<IconButton color="secondary" aria-label="arrow" component="button" >
  { props.next ? <ArrowForwardIosIcon  />  : <ArrowBackIosNewIcon  /> }
</IconButton>
 );
}
