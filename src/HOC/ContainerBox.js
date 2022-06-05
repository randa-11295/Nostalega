import Container from '@mui/material/Container';

export default function ContainerBox(props) {

const boxStyle = {maxWidth : { sx : "sx" , sm : "sm" , md : "md" , lg : "lg"} , padding: "0px !important"}

return (
    <Container sx={boxStyle}>
        {props.children}
    </Container>   
  );
}