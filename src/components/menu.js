import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
// import styles
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Helmet from 'react-helmet';

function Header(props) {
  return (
    <h1 class="text-center digitL display-2 mb-4">
      Digitos
    </h1>
    
  );
}

function MenuButtons(props) {

    const buttons = ['Jugar','Historial','Instrucciones','Ajustes'].map(( move) => {
        return (
          <div class='mb-1'>
            <Link to="/GameConfig">
            <Button variant="warning" class='text-center ' size="lg" block>
               {move}
            </Button>
          </Link>

          </div>
          
        );
      }); 
    return (
      <Fragment>
        <Container>
            {buttons}
        </Container>
      </Fragment> 
    );
  } 

class Menu extends React.Component {

  render() {
    
    return (
        <Fragment>
            <Helmet bodyAttributes={{style: 'background-color : #e497cd'}}/>                           
            <Header/>
            <MenuButtons/>
        </Fragment>
    );
  } 
}

export default Menu;