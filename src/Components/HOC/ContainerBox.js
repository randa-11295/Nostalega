import { Margin } from '@mui/icons-material';
import Container from '@mui/material/Container';

export default function ContainerBox(props) {

  let num = props.paddingAtTop ?  "80px" : "0" 

const boxStyle = {maxWidth : { xs : "xs" , sm : "sm" , md : "md" , lg : "lg" } ,
                   paddingTop : num,
}

return (
    <Container sx={boxStyle}>
        {props.children}
    </Container>   
  );
}