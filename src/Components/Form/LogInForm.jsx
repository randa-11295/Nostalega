import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import InputText from '../comman/InputText'
import {logInSchema} from '../../General/vaildationShema'
import PassInput from '../comman/PasswordInput';
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";


export default function SignUpForm() {
 
  
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

const navigate = useNavigate()

const formik = useFormik({
        initialValues : {
            email : "",
            password :"",
            
          },

          validationSchema : logInSchema,
          onSubmit: values => {
            setLoading(true)

            axios.post('http://localhost:4000/user/sign-up',values)
              .then(function (response) {
                      console.log(response.data );
                       navigate("/")
              })

              .catch(function (error) {
                console.log("s")
                setLoading(false)
                  setError(true)
            
              });
  

}
})


  return (
      
<Box sx={{ flexGrow: 1 , padding : "5px  " , 
                  minHeight : "100vh" ,
                   display : "flex",
                   background : "red",
                   justifyContent : "space-evenly",
                   alignItems : "center",
                   flexDirection: 'column',}}>  

   <form onSubmit={formik.handleSubmit} >

      <Grid container spacing={2}   sx={{background :"white",
                    mainHeight : "90vh" ,
                    margin : "auto",
                    padding : "0px 25px 10px 5px",
                    width : {
                        xs: "95%",
                        md : "80%",
                        lg : "50%",
                    }}}
                     >


   

 

        <Grid item xs={12} >     
                <InputText  text={formik.touched.email ? formik.errors.email : null}
                        blur = {formik.handleBlur }
                        vaild={formik.touched.email && formik.errors.email}
                        feild = "E-mail" 
                        name="email" 
                        change={formik.handleChange}
                        val={formik.values.email}
                        mult = {true}
                        type ='email'
                                      
               /> 
        </Grid>


     

        <Grid item xs={12}>
          <PassInput   text={formik.touched.password ? formik.errors.password : null}
                        blur = {formik.handleBlur }
                       vaild={formik.touched.password && formik.errors.password}                                             
                         feild = "password" 
                        name="password" 
                        change={formik.handleChange}
                        val={formik.values.password}   />
         </Grid>

      
      

      <Box sx={{ position: 'relative' }}>
        <Button fullWidth  type="submit" 
          variant="contained"
          disabled={loading}
          // onClick={handleButtonClick}
        >
          submit
        </Button>
        {loading && (
          <CircularProgress
          size={24}
            sx={{
              color: "red",
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
            />
            )}
      </Box>
    
        
          
          <Grid item xs={12} sx={{textAlign : "center" , fontSize : ".8rem", color : "red"
                            
        }}>
            {error ? "error" : null }
                        

        </Grid>


        </Grid>
      </ form >
      
    </Box>
        
  );
}


