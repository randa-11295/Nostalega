import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const btnStyle ={
      color : 'secondary.main',
      border : 'solid 1px var(--creemy)',
      marginLeft : '15px',
      transition: '.3s ease-in-out all' ,
      '&:hover': {
        border : 'solid 1px var(--smoothRed)',
        color : 'primary.main',
         },
        }

export default function IconCustomButton(props) {
  return (
    <Tooltip title={props.title} arrow>
      <IconButton  sx={btnStyle}>
         {props.children}
      </IconButton>
    </Tooltip>
  );
}