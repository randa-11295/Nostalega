import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import InputText from '../comman/InputText'
import {signupSchema} from '../../General/vaildationShema'
import PassInput from '../comman/PasswordInput';
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import {flexStyle } from "../../General/genralStyle"

export default function SignUpForm() {
 
  
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

const navigate = useNavigate()

const formik = useFormik({
        initialValues : {
            firstName : "",
            lastName : "",
            email : "",
            password :"",
            username :"",
          },

          validationSchema : signupSchema,
          onSubmit: values => {
            setLoading(true)

            axios.post('http://localhost:4000/user/sign-up',values)
              .then(function (response) {
                      console.log(response.data );
                       navigate("/user-profile")
              })

              .catch(function (error) {
                console.log("s")
                setLoading(false)
                  setError(true)
            
              });}
})


  return (
      
<Box sx={{  padding : "5px  " , 
            height: '100%',
            background : "yellow",
            ...flexStyle( )
          }}>  

   <form onSubmit={formik.handleSubmit} >

      
              <InputText text={formik.touched.firstName ? formik.errors.firstName : null}
                          vaild={formik.touched.firstName && formik.errors.firstName}
                          feild = "Frist name" 
                          name="firstName" 
                          change={formik.handleChange}
                          blur = {formik.handleBlur }
                          val={formik.values.firstName}
                          type ='text'
                /> 
          
                <InputText  text={formik.touched.lastName ? formik.errors.lastName : null}
                        blur = {formik.handleBlur }
                        vaild={formik.touched.lastName && formik.errors.lastName}
                        feild = "Last name" 
                        name="lastName" 
                        change={formik.handleChange}
                        val={formik.values.lastName}                   
                    /> 
      
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
      
          <PassInput   text={formik.touched.password ? formik.errors.password : null}
                        blur = {formik.handleBlur }
                       vaild={formik.touched.password && formik.errors.password}                                             
                         feild = "password" 
                        name="password" 
                        change={formik.handleChange}
                        val={formik.values.password}   />
        
                <PassInput  
                              text={formik.touched.passwordConfirmation ? formik.errors.passwordConfirmation : null}
                                blur = {formik.handleBlur }
                               vaild={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}                          
                               feild = "Re-password" 
                                name="passwordConfirmation" 
                                change={formik.handleChange}
                                val={formik.values.passwordConfirmation}   />
     

      

         <Grid item xs={6} >
      

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
    
          </Grid>
          
          <Grid item xs={12} sx={{textAlign : "center" , fontSize : ".8rem", color : "red"
                            
        }}>
            {error ? "error" : null }
                        

        </Grid>


      
      </ form >
      
    </Box>
        
  );
}






 
