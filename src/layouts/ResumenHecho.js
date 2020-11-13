import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../components/layout/Loader";
import Grid from '@material-ui/core/Grid';




export class ResumenHecho extends Component {
state={
  data:[],
  form:{
    id: '',
    name: '',
    pais: '',
    username: '',
    email: '',
    loader: true
  }
}
componentDidMount() {
    this.peticionGet();
  }
peticionGet=()=>{
axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
  this.setState({
      data: response.data,
      loader: false
      
});
}).catch(error=>{
  console.log(error.message);
  this.setState({
    loader: false,
    error
 })
})
}

peticionPost=async()=>{
  delete this.state.form.id;
 await axios.post("/api/exercises/post,this.state.form").then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}



 
  

  render(){
    const {form}=this.state;
    if(this.state.loader){
        return <Loader />
      }
     
  return (
      <>
     
    <div style={{background: "white"}}>
    <h2 style={{textAlign: "center", color:"black"}}>Resumen del test</h2>
    

  <br /><br />
  <Grid item xs={12} sm={12} md={12} style={{overflow: 'auto'}}>
          <div>
            
          <table className="table" >
      <thead style={{background: "black", color: "white"}}>
        <tr >
          <th style={{textAlign: "center"}}>Nº</th>
          <th style={{textAlign: "center"}}>Pregunta</th>
          <th style={{textAlign: "center"}}>Su Respuesta</th>
          <th style={{textAlign: "center"}}>La respuesta correcta es</th>
          <th style={{textAlign: "center"}}>Tiempo acumulado</th>
          <th style={{textAlign: "center"}}>Resultado</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(data=>{
          return(
            <tr>
          <td style={{textAlign: "center"}}>{data.id}</td>
          <td style={{textAlign: "center"}}>{data.name}</td>
          <td style={{textAlign: "center"}}>{data.username}</td>
          <td style={{textAlign: "center"}}>{data.email}</td>
          <td style={{textAlign: "center"}}>00:02:04</td>
          <td style={{textAlign: "center"}}>Correcto</td>
         
         
          </tr>
          )
        })}
      </tbody>
    </table>

               
                 
             
          </div>
        </Grid>
        
    


    
  </div>


</>
  );
}
}

  