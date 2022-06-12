import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


export default function ArrowButton() {
return (
<IconButton color="primary" aria-label="arrow" component="button">
    <PhotoCamera color="primary" />
</IconButton>
 );
}
