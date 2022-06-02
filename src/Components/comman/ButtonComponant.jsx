import Button from '@mui/material/Button';


const ButtonComponant =(props)=>{
    
    let bg = '#FBBB4F';
    let outLine = 'none';

   if( props.type  === 'outlined'){
        bg = 'white';
        outLine = '2px solid #FBBB4F';
   }

    const ButtonStyle ={ borderRadius : '25px' , 
                         fontWeight : 500 ,
                         textTransform: 'capitalize',
                         letterSpacing: '1px',
                         marginRight:  props.mr ,
                         color : 'text.pramriy',
                         border: outLine ,
                         boxShadow : 'none',
                         transition: '.3s ease-in-out all' ,

                         fontSize :{ xs :'15px'  , md : '18px', xl :'20px'},
                         '&:hover': {
                         //    background: bg,
                            border: outLine,
                            boxShadow: 'none'
                          },
    }

    return   (  <Button variant={props.type} sx={{}}>
                     {props.text}
                </Button>
    )}

export default ButtonComponant