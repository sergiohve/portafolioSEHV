import React, { useState } from "react";

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
    .required("Por favor ingrese su nombre"),
    agencia: Yup.string()
    .min(6, "El numero minimo de letras es 6")
    .required("Por favor ingrese la agencia"),
    area: Yup.string()
    .min(6, "El numero minimo de letras es 6")
    .required("Por favor ingrese el area"),
    email: Yup.string()
    .email("Tù correo es incorrecto")
    .required("Por favor ingrese su correo corporativo"),
});

const Registro=()=> {
  const [formValues, setFormValues] = useState();
  const [showComponent, setShowComponent]=useState(false);

  const accion=()=>{
    setShowComponent(true)
  
  
}

  return (
    <PageWrapper>
      
      <Formik
        initialValues={{
          fullname: "",
          agencia: "",
          area: "",
          email: "@vintar.com",
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
                <center><h3>REGISTRO</h3></center>
                <Label htmlFor="fullname">
                  Nombre completo
                  <Input
                    type="text"
                    name="fullname"
                    autoCorrect="off"
                    autoComplete="name"
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
                 <Label htmlFor="fullname">
                  Agencia
                   <Input
                    type="text"
                    name="agencia"
                    
                    autoComplete="agencia"
                    placeholder="Agencia"
                    valid={touched.agencia && !errors.agencia}
                    error={touched.agencia && errors.agencia}
                  />
               
                {errors.agencia && touched.agencia && (
                  <StyledInlineErrorMessage>
                    {errors.agencia}
                  </StyledInlineErrorMessage>
                )}
                
                </Label>
                <Label htmlFor="fullname">
                  Area
                   <Input
                    type="text"
                    name="area"
                    
                    autoComplete="area"
                    placeholder="Area"
                    valid={touched.area && !errors.area}
                    error={touched.area && errors.area}
                  />
               
                {errors.area && touched.area && (
                  <StyledInlineErrorMessage>
                    {errors.area}
                  </StyledInlineErrorMessage>
                )}
                
                </Label>
                <Label htmlFor="fullname">
                  Correo corporativo
                  <Input
                   
                    name="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholder="correo"
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
              </Form>

              
            </>
          );
        }}
      </Formik>
    </PageWrapper>
  );
}

export default Registro;
