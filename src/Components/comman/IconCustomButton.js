import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function IconCustomButton(props) {

  const staticBtn  ={
    color : 'primary.main',
    border : 'solid 1px var(--smoothRed)',
  } 

const hoverBtn ={
      color : 'secondary.main',
      border : 'solid 1px var(--creemy)',
      marginLeft : '15px',
      transition: '.3s ease-in-out all' ,
      '&:hover': {
        border : 'solid 1px var(--smoothRed)',
        color : 'primary.main',
         },
        }


  return (
    <Tooltip title={props.title}   placement={props.small?  "left" : "bottom"}>
      <IconButton size={props.small?  "small" : ""}  sx={props.small?  staticBtn : hoverBtn } >
         {props.children}
      </IconButton>
    </Tooltip>
  );
}