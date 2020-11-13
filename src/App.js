import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import Registro from './layouts/Registro';

//Terminosy condiciones
import TerminosCondiPage from './layouts/TerminosCondiPage';
//Iniciar Sesion
import IniciarSesPage from './layouts/IniciarSesPage';

import Header from "./components/layout/Header";




import instruccionesTest from './layouts/instruccionesTest';
//Resumen del test
import {ResumenHecho} from './layouts/ResumenHecho';
//PAgina no encontrada
import PaginaNoEncontrada from './layouts/PaginaNoEncontrada';
//Ant Desing
import Dashboard from './layouts/Dashboard';
// Views 
import Home from './views/Home';



import ProbandoValid from './layouts/Registro';

import RegistroInsta from './layouts/RegistroInsta';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
    <Header/>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/registro"  layout={Registro} />
          <AppRoute exact path="/" component={Home} layout={RegistroInsta} />
          <AppRoute exact path="/IniSes"  layout={IniciarSesPage} />
          <AppRoute exact path="/terminos"  layout={TerminosCondiPage} />
         
         
          <AppRoute exact path="/instrucciones"  layout={instruccionesTest} />
          <AppRoute exact path="/ResumenHecho"  layout={ResumenHecho} />
          <AppRoute exact path="/ProbandoValid"  layout={ProbandoValid} />
          <AppRoute exact path="/Dashboard"  layout={Dashboard} />
          <AppRoute component={PaginaNoEncontrada}/>
        </Switch>
      )} />
      </>
  );
}

export default App;