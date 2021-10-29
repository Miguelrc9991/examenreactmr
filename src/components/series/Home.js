import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios'
import Global from './../../Global'
export default class home extends Component {
    // state = {
    //     series:[]
    //     ,status:false

    // }

    // cargarSeries = () =>{
    //     var request = "/api/series"
    //     var url = Global.urlseries + request;
    //     console.log(url)
    //     axios.get(url).then(res => {
    //         this.setState({
    //             series :res.data
    //             ,status:true
    //         });

    //     });
    // }
    // componentDidMount = () =>{
    // this.cargarSeries();

    // }
    state = {
    series:[]
      ,status:false
  }
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
  
  componentDidMount = () =>{

    this.cargarSeries();

}
    render() {
      
        

        return (
            <div>
               <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SERIES</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/nuevopersonaje">Nuevo personaje</NavLink>
                            </li>
                            
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/modificarpersonaje">Modificar personaje</NavLink>
                            </li>
        
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Series</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
            {this.state.series.map((ser,index)=>{
                                            return(
                                                <li key={index} value= {ser.idSerie}> <NavLink className="nav-link" to={"/plantillaseries/"+ser.idSerie}>{ser.nombre}</NavLink></li>
                                                

                                            )
                                          })}
             


            </ul>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>
            </div>
        )
        
    }
}
