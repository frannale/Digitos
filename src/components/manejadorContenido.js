import React, { Fragment } from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, ListGroup, Badge} from 'react-bootstrap';


export default (intento,objetivo) => {
    let res = {num: intento}
  
    for(let i=0;i<4 ;i++){
      let ok = null
      for(let j=0;j<4;j++){
        if((String(intento)[i] == String(objetivo)[j]) && ok == null ){
          if(i == j ) res[i]='success'
          else res[i]='warning'
          ok= true                
        }
        }
      if(ok == null) res[i]='danger'
    } 
    return res
  }



function digitos(index){
        
  const items = []
  for (let i=0;i<4;i++) {
    items.push(
      <Badge
        style={{
          fontSize:'2rem'
          }}
        className='m-4 p-4'
        variant={index[String(i)]}
        >{index['num'][String(i)]}
      </Badge>
    )
  }
  return items
  }


export function Intentos(props) {
      
      
    return (
      <>   
      <h4 className="text-center digitL display-3 mb-4">
       Intentos: {props.numbers.length}
      </h4>
      {props.numbers.reverse().map((index) => {
          return <ListGroup.Item>
                  <div 
                    className='text-center digitL number'
                    style={{
                      backgroundColor: '#7581F3'
                    }}
                  >
                  <Badge
                    style={{
                    fontSize:'2rem'
                    }}
                    className='m-4 p-4' variant='dark'
                    ><b><h3>{index['num']}</h3></b>
                  </Badge>
                  {digitos(index)}
                  </div>
                  
                 </ListGroup.Item>
        })}
      </>
      
    )
  }

  
  export function Header(props) {
    return (
      <h2
      style={{
        width:'100%'
        }}
      className="text-center digitL display-3 mb-4">
       {'Jugador ' + props.value}
      </h2>
      
    );
  }


