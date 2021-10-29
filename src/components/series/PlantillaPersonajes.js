import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from './../../Global'

export default class PlantillaPersonajes extends Component {
    state = {
        personajes:[]
        ,status:false

    }
    cargarPersonajes = () =>{
        var request = "/api/Personajes/"+this.props.idSerie
        var url = Global.urlseries + request;
        axios.get(url).then(res=>{
            this.setState({
                personajes:res.data,
                status:true


            })


        })

    }
    componentDidMount = () => {
        this.cargarPersonajes();



    }
    render() {
        return (
            <div>
                 <table className="table table-bordered">
                    <thead>
                        <th>Personaje</th>
                        <th>Imagen</th>
                    </thead>
                    <tbody>
                        {this.state.personajes.map((perso,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{perso.nombre}</td>
                                    <td><img href={perso.imagen} /></td>
                                </tr>
                            )
                        })}


                    </tbody>




                 </table>
            </div>
        )
    }
}
