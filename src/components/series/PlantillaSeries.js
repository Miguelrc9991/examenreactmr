import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from './../../Global'

export default class PlantillaSeries extends Component {

    state = {
        serie:{}
        ,status:false

    }
    cargarSerie = () =>{
        var request = "/api/Series/"+this.props.idSerie
        var url = Global.urlseries + request;
        axios.get(url).then(res=>{
            this.setState({
                serie:res.data,
                status:true


            })


        })

    }
    componentDidMount = () => {
        this.cargarSerie();



    }
  

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>

                        <img href={this.state.serie.imagen} ></img>
                        </td>
                    </tr>
                    <tr>
                        <td>

                        <h2>{this.state.serie.nombre} </h2>
                        </td>
                    </tr>  <tr>
                        <td>

                        <h2>  {this.state.serie.puntuacion}  </h2>
                        </td>
                    </tr>

                    <tr>
                        <td> <NavLink to={"/personajes/"+ this.props.idSerie}  className="btn btn-info"    >
                                    Personajes
                                </NavLink></td>
                    </tr>
                    </tbody>
                </table>
                
               

            </div>
        )
    }
}
