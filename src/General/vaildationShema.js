import * as yup from 'yup';

const stringVaild = yup.string()
                .matches(/^[a-zA-Z]+$/ , 'it must be Characters')
                .min(2, 'Too Short!')
                .max(15, 'Too Long!')
                .required('Required');

const passVaild =  yup.string()
    .required('Required')
    .min(8, 'Too Short!')
 ;

const passdConfirVaild =  yup.string()
              .required('Required')
              .oneOf([yup.ref('password')], 'Passwords does not match');

const emailVaild= yup.string()
              .email()
              .required('Required');

 
export  const signupSchema = yup.object().shape({
    firstName: stringVaild,
    lastName: stringVaild,
    email: emailVaild ,         
    password : passVaild ,
    passwordConfirmation : passdConfirVaild ,
});

export  const logInSchema = yup.object().shape({
     email: emailVaild ,         
     password : passVaild ,
 });