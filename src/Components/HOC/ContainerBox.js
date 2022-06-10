import { Margin } from '@mui/icons-material';
import Container from '@mui/material/Container';

export default function ContainerBox(props) {

const boxStyle = {maxWidth : { xs : "xs" , sm : "sm" , md : "md" , lg : "lg" } ,
                   
}

return (
    <Container sx={boxStyle}>
        {props.children}
    </Container>   
  );
}