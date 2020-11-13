import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



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

//hablitar el boton de aceptar condiciones
  
  
  export  const TerminosCondi=() => {
    const classes = useStyles();
    
    const[activobtn2, setActivobtn2]= useState(true);
  
  const activo2=()=>{
    setActivobtn2(false);
    
  }
 
  
    
    
    return (
      <Grid container component="main" className={classes.root} style={{overflow: 'auto', background: "white"}}>
        <CssBaseline />
 
        <Grid item xs={12} sm={6} md={6} >
          <div className={classes.paper}>
            
          <Typography component="h1" variant="h5" style={{color: "black"}}>
          <div style={{color:"black"}}>Avisos de Privacidad</div>
          </Typography>
          <br></br>
          
            
            <p style={{textAlign:"justify"}}>"ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
              
               
    
             
          </div>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6} >
          <div className={classes.paper}>
          <Typography component="h1" variant="h5" style={{color: "black"}}>
          <div style={{color:"black"}}>Tèrminos de uso</div>
          </Typography>
           
            
              
              <br></br>
            <p style={{textAlign:"justify"}}>"Pain and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." 
            </p>
                
               
               
             
          </div>
         
        </Grid> <Grid item xs={12} sm={12} md={12} >
         <center>
       
         <center><Checkbox id="check2" onClick={activo2} />Acepto los avisos de privacidad y tèrminos de uso</center>
              
              
              </center>
        </Grid>
       
        <Grid item xs={12} sm={12} md={12} >
         <center>
       
       <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{width:"200px"}}
                name="boton"
                id="btn"
                disabled={activobtn2}
                value="btn"
                
              >
               <Link to="/IniSes"> 
                 
              Aceptar
              </Link>
              </Button>
              
              
              </center>
        </Grid>
       
        
      </Grid>
    );
  }


