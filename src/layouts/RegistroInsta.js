import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  CodeWrapper
} from "./formik/styles";

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(8, "el minimo numero de letras es 8")
    .required("Por favor ingrese su nombre completo"),
    usuario: Yup.string()
    .min(6, "El numero minimo de letras es 6")
    .required("Por favor ingrese su nombre de usuario"),
    buscas: Yup.string()
    .min(5, "El numero minimo de letras es 5")
    .required("Por favor ingrese que busca"),
    email: Yup.string()
    .email("Tù correo es incorrecto")
    .required("Por favor ingrese su correo"),
  
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const [formValues, setFormValues] = useState();
  const classes = useStyles();
  
  return (
   
      
      <Formik
        initialValues={{
          fullname: "",
          usuario: "",
          buscas: "",
          email: "",
          password: ""
        }}
        validate={(values) => {
          const errors = {};

          
         
         
          // We need a valid password
          if (!values.password) errors.password = "La contraseña es requerida";
          else if (`${values.password}`.length < 7)
            errors.password =
              "La contraseña es de minimo 7 caracteres";

          console.log({ values, errors });

          return errors;
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          setFormValues(values);

          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);

            clearTimeout(timeOut);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValidating,
          isValid
        }) => {

  return (
 
    <Grid container component="main" className={classes.root} style={{padding: "30px", overflow: "scroll"}} >
      <CssBaseline />
      <Grid item xs={false} sm={6} md={6} className={classes.image}  />
      
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6}   square>
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h4" >
            FACEWORK
          </Typography>
          <Typography component="h1" variant="h6" >
            ¡Registrese y consiga un buen trabajo!
          </Typography>
          <Form name="contact" method="post" onSubmit={handleSubmit}  >
                
                
                <Label htmlFor="email">
                 
                  <Input
                   
                    name="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholder="Correo"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </Label>
                <ErrorMessage name="email">
                  {msg => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Label htmlFor="fullname">
                 
                  <Input
                    type="text"
                    name="fullname"
                    autoCorrect="off"
                    
                    placeholder="Nombre y apellido"
                    valid={touched.fullname && !errors.fullname}
                    error={touched.fullname && errors.fullname}
                  />
                   {errors.fullname && touched.fullname && (
                  <StyledInlineErrorMessage>
                    {errors.fullname}
                  </StyledInlineErrorMessage>
                )}
                 </Label>
                 <Label htmlFor="Usuario">
                 
                  <Input
                    type="text"
                    name="usuario"
                    autoCorrect="off"
                    
                    placeholder="Nombre de Usuario"
                    valid={touched.usuario && !errors.usuario}
                    error={touched.usuario && errors.usuario}
                  />
                   {errors.usuario && touched.usuario && (
                  <StyledInlineErrorMessage>
                    {errors.usuario}
                  </StyledInlineErrorMessage>
                )}
                 </Label>
                 <Label htmlFor="buscas">
                 
                  <Input
                    type="text"
                    name="buscas"
                    autoCorrect="off"
                   
                    placeholder="¿Què buscas?"
                    valid={touched.buscas && !errors.buscas}
                    error={touched.buscas && errors.buscas}
                  />
                   {errors.buscas && touched.buscas && (
                  <StyledInlineErrorMessage>
                    {errors.buscas}
                  </StyledInlineErrorMessage>
                )}
                 </Label>
                <Label htmlFor="password">
                 
                  <Input
                    type="password"
                    name="password"
                    autoCapitalize="off"
                    autoCorrect="off"
                   
                    placeholder="Contraseña"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />
                </Label>
                <ErrorMessage name="password">
                  {msg => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                
                <Submit type="submit" disabled={!isValid || isSubmitting}>
                <Link to="/IniSes">{isSubmitting ? `Ingresando...` : `Ingresar`} </Link>
                
                </Submit>
                <Box mt={6}>
                  ¿Ya tienes cuenta?
              <Link to="/IniSes">Iniciar Sesiòn</Link>
            </Box>
              </Form>
        </div>
      </Grid>
    </Grid>
    
  ); }}
  </Formik>

);
}