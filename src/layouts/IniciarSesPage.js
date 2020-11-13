import React, { useState } from "react";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Box from '@material-ui/core/Box';
import { Link, Redirect } from "react-router-dom";
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

    email: Yup.string()
    .email("Tù correo es incorrecto")
    .required("Por favor ingrese su correo corporativo"),
});

const IniciarSesPAge=()=> {
  const [formValues, setFormValues] = useState();
  const [showComponent, setShowComponent]=useState(false);

  const accion=()=>{
    setShowComponent(true)
  
  
}
if(showComponent==true){
  return <Redirect to="/Dashboard"/>
}
  return (
    <PageWrapper>
      
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={(values) => {
          const errors = {};

          
         
         
          // We need a valid password
          if (!values.password) errors.password = "La contraseña es requerida";
          else if (`${values.password}`.length < 7)
            errors.password =
              "La contraseñaes de minimo 7 caracteres";

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
          }, 1000);
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
            <>
              <Form name="contact" method="post" onSubmit={handleSubmit}>
                <center><h3>Iniciar Sesiòn</h3></center>
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
         
                
                <Label htmlFor="password">
                  Contraseña
                  <Input
                    type="password"
                    name="password"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
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
                
                <Submit type="submit" onClick={accion} disabled={!isValid || isSubmitting}>
               {isSubmitting ? `Registrando...` : `Registrarme`}
                </Submit>
                <Box mt={6}>
                  ¿No tienes cuenta?
              <Link to="/">Registrarse</Link>
            </Box>
              </Form>

              
            </>
          );
        }}
      </Formik>
    </PageWrapper>
  );
}

export default IniciarSesPAge;
