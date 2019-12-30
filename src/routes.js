import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import GameConfig from './components/game'
import Menu from './components/menu'

class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Menu} />
                <Route exact path='/gameConfig' component={GameConfig} />
            </Switch>    
        )
    }
    
} 

export default Routes;
