import React, { Component } from 'react'
import axios from 'axios';
import Global from './../../Global'
import { Redirect } from 'react-router';
export default class NuevoPersonaje extends Component {
    cajanombreRef = React.createRef();
        cajaimagenRef=React.createRef();
        cajaserieRef = React.createRef();
        state = {
            mensaje : ""
            ,status : false
        }
        
        insertarPersonaje = (e) =>{
            e.preventDefault();
            var id = 1  
            var nom  = this.cajanombreRef.current.value;
           var img = this.cajaimagenRef.current.value;
          var  idS=this.cajaserieRef.current.value;
          console.log(nom)
          console.log(img)
          console.log(idS)

            var serie = {
                idPersonaje : id,
                nombre: nom,
                imagen:img,
                idSerie:idS
            }
            var request = "/api/Personajes"
            var url = Global.urlseries+request;
            axios.post(url,serie).then(res=>{
                this.setState({
                mensaje:"Personaje Insertado Correctamente"
               , status:true
            });
            })
        }
    render() {
    //    if(this.state.status==true){
    //        return(<Redirect to = ""/>);
    //    }
        return (
            <div>
                <h1>Nuevo personaje</h1>
                <form style={{width:"500px",display:"table",margin:"0 auto"}} onSubmit={this.insertarPersonaje}>

<div className="form-group row">
    <label>Nombre :</label>
    <input ref={this.cajanombreRef} type="text" className="form-control" ref={this.cajanumeroRef} required></input>
</div>

<div className="form-group row">
    <label>Imagen :</label>
    <input ref={this.cajaimagenRef} type="text" className="form-control" ref={this.cajanombreRef} required></input>
</div>   

<div className="form-group row">
    <label ref={this.cajaserieRef}>Serie :</label>
            <select>
            
               
                <option value="1">Juego de Tronos</option> 
                <option value="2">The Mandalorian</option> 

                <option value="3">Narcos</option> 
                <option value="4">The Boys</option> 
                <option value="5">The Big Bang Theory</option> 
                <option value="6">Comapeones</option> 
                <option value="7">Como conocí a vuestra madre</option> 
                <option value="8">La casa de papel</option> 

         
            </select>
    </div>
<button className="btn btn-info" style={{marginTop:"8px"}}>
    Insertar Departamento
</button>
<h1 style={{color:"red"}}>{this.state.mensaje}</h1>
</form>
            </div>
        )
    }
}
