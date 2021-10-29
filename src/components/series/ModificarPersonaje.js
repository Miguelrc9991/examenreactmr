import axios from 'axios'
import React, { Component } from 'react'
import Global from './../../Global'
export default class ModificarPersonaje extends Component {
    selectSeriesRef = React.createRef();
    selectPersonajesRef = React.createRef();
    state = {
        personajes:[]
        ,series:[]
        ,status:false
    }
    cargarPersonajes = () =>{

        var request = "/api/Personajes"

        var url = "https://apiseriespersonajes.azurewebsites.net//api/Personajes"
        console.log(url)
        axios.get(url).then(res=>{
            console.log(res.data)
            this.setState({
                personajes : res.data
                ,status:true

            })



        })


    };
    cargarSeries = () =>{
        var request = "/api/series"
        var url = "https://apiseriespersonajes.azurewebsites.net//api/series"
        axios.get(url).then(res=>{
            this.setState({
                series : res.data
                ,status:true

            })



        })

    }
    ModificarPersonaje = (e) =>{
        e.preventDefault();
        var id = parseInt(this.selectPersonajesRef.current.value);
        var idSerie = parseInt(this.selectSeriesRef.current.value);
        var nomb = this.state.personajes.nombre
        var request = "/api/Personajes/"+id+"/"+idSerie+"";
        var img = this.state.personajes.imagen
        var url = "https://apiseriespersonajes.azurewebsites.net/"+request
        var personaje = {
            idPersonaje: id
            ,nombre:nomb
            ,imagen:img
            ,idSerie:idSerie
        };
        axios.put(url,personaje).then(res=>{
            this.setState({
                status:true

            });
        });

    }

    componentDidMount = () =>{

        this.cargarPersonajes();
        this.cargarSeries();

    }
    render() {
        return (
            <div>
                <h1> Personajes y series</h1>

                <form style={{width:"500px",display:"table",margin:"0 auto"}}
                            onSubmit={this.ModificarPersonaje}>
                                
                                <div className="form group-row">
                                        <label>Seleccione una serie:</label>
                                        <select ref={this.selectSeriesRef}>
                                        {this.state.series.map((ser,index)=>{
                                            return(
                                                <option key={index} value= {ser.idSerie}>{ser.nombre}</option>
                                                

                                            )

                    })}
                                    </select>      

                                </div>
                                <div className="form group-row">
                                        <label>Seleccione un Personaje:</label>
                                        <select ref={this.selectPersonajesRef}>
                                        {this.state.personajes.map((person,index)=>{
                                            return(
                                                <option key={index} value= {person.idPersonaje}>{person.nombre}</option>
                                                

                                            )

                    })}
                                    </select>                                </div>
                                
                                <button className="btn btn-warning">Guardar Cambios</button>  

                            </form>


            </div>
        )
    }
}
