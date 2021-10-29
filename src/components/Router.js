import React, { Component } from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import NuevoPersonaje from "./series/NuevoPersonaje";
import ModificarPersonaje from "./series/ModificarPersonaje";
import PlantillaSeries from "./series/PlantillaSeries";
import PlantillaPersonajes from "./series/PlantillaPersonajes";
import Home from './series/Home'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
        <Home/>
            <Switch>
            <Route exact path="/nuevopersonaje" component={NuevoPersonaje}/>
            
            <Route exact path="/modificarpersonaje" component={ModificarPersonaje}/>
            <Route exact path="/plantillaseries/:idserie" render={props=>{
                                    var idserie = props.match.params.idSerie;
                                    
                                    return(<PlantillaSeries idSerie={idserie}/>);
                                }}/>
            
            <Route exact path="/personajes/:idserie" render={props=>{
            var idserie = props.match.params.idSerie;
                                    
            return(<PlantillaPersonajes idSerie={idserie}/>);
            
            }}/>
            
            </Switch>
            
            
            </BrowserRouter>
        )
    }
}

