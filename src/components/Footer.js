import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonGroup, Button, Glyphicon} from 'react-bootstrap';
import '../styles/Footer.css';

export default class Footer extends Component {
    render() {
      return (
        <div>
          <div className="phantom" />
          <div className="style">

            <image src="https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_960_720.png"/>
            <ButtonGroup>

            <Link to="/Categories" >    
                <Button bsStyle="danger" bsSize="medium">
                  <Glyphicon glyph="glyphicon glyphicon-tag" style={{"marginRight":"5px"}}/>
                  Categories
                </Button>
              </Link>
              
              <Link to="/Locations" >         
                <Button bsStyle="danger" bsSize="medium">
                  <Glyphicon glyph="glyphicon glyphicon-map-marker" style={{"marginRight":"5px"}}/>
                  Location            
                </Button>
              </Link>

            </ButtonGroup>
          </div>
        </div>
      );
    }
  }
  