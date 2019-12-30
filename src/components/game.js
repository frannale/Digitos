import React, { Fragment } from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, ListGroup, Badge} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Helmet from 'react-helmet';
import { useAlert } from 'react-alert'
import {Header,Intentos} from './manejadorContenido'
import validateCode from './manejadorContenido'

class GameConfig extends React.Component {
    constructor(props) {
        super(props);
        this.number= React.createRef()
        this.state = {
          intentosA:[],
          intentosB:[],
          aNumber: null,
          bNumber: null,
          aIsNext: true,
        };
      }

      handeUnblock(){
        let numero= String(this.number.current.value)
        if( numero.length !== 4) return false
        if(this.state.aIsNext){
          let numbers = this.state.intentosA.map(function(x) { return x['num'] });
          if( numbers.includes(numero)) return false
          this.setState({
            intentosA: this.state.intentosA.concat(validateCode(numero,this.state.aIsNext ? this.state.bNumber : this.state.aNumber)),
            aIsNext: false,
          });

        }
        else{
          let numbers = this.state.intentosA.map(function(x) { return x['num'] });
          if( numbers.includes(numero)) return false          
          this.setState({
            intentosB:this.state.intentosB.concat(validateCode(numero,this.state.aIsNext ? this.state.bNumber : this.state.aNumber)),
            aIsNext: true,
          });
        }
        
        this.number.current.value = ''
        }  

    handeClick(){
      let numero= String(this.number.current.value)
      if(numero.length !== 4) return false

      if(this.state.aIsNext){
        this.setState({
          aNumber: numero,
          aIsNext: false,
        });
        this.number.current.value = ''
      }
      else{
        this.setState({
          bNumber: numero,
          aIsNext: true,
        });
        this.number.current.value = ''
      }}
    
    render() {
      let content;
        if (this.state.bNumber == null) {
            content =                   
            <Fragment>
            <input ref={this.number} type="number" max='9999' className="form-control form-control-lg text-center" id="number" aria-describedby="numer" placeholder="Registre su codigo de 4 digitos"></input>
            <Button variant='warning' block size="lg" className="text-center mt-4" onClick={() => this.handeClick()}>
                Confirmar codigo
            </Button>
            </Fragment>
                } else {
            content =
            <Fragment>
            <input ref={this.number} type="number" max='9999' className="form-control form-control-lg text-center" id="number" aria-describedby="numer" placeholder="Desbloquee el codigo de 4 digitos"></input>
            <Button variant='warning' block size="lg" className="text-center mt-4" onClick={() => this.handeUnblock()}>
            Desbloquear codigo
            </Button>
            <Intentos
                numbers={ this.state.aIsNext ? this.state.intentosA : this.state.intentosB}
            />
            </Fragment>
      }      
        return (
            <Fragment>
                <Helmet bodyAttributes={{style: 'background-color : #e497cd'}}/>
                <Container>
                  <Header
                    value={this.state.aIsNext ? 1 : 2}
                  />
                  {content}
                </Container>
            </Fragment>
        );
    } 
}   

export default GameConfig;