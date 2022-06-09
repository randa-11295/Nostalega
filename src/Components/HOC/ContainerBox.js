import { Margin } from '@mui/icons-material';
import Container from '@mui/material/Container';

export default function ContainerBox(props) {

  let num = props.paddingAtTop ?  "100px" : "0" 

const boxStyle = {maxWidth : { sx : "sx" , sm : "sm" , md : "md" , lg : "lg" , xl :"xl"} ,
                  padding : `${num} 5%  0!important`,
}

return (
    <Container sx={boxStyle}>
        {props.children}
    </Container>   
  );
}