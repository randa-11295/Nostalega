import Container from '@mui/material/Container';

export default function ContainerBox(props) {

const boxStyle = {maxWidth : { sx : "sx" , sm : "sm" , md : "md" , lg : "lg" , xl :"xl"} , }

return (
    <Container sx={boxStyle}>
        {props.children}
    </Container>   
  );
}