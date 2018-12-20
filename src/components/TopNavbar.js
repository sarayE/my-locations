import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class TopNavbar extends Component {
    render() {
      return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                <Link to="/" style={{"all":"unset"}}>
                  <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-89fdce5084dbe77556cf99f7b22ae7e8-pin.png" width="25px" style={{"display": "inline", "marginRight":"5px"}}/>
                  My Locations 
                </Link>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              
              <NavItem eventKey={1}>
                <Link to="/" style={{"all":"unset"}}>Home</Link>  
              </NavItem> 
   
            </Nav>
            <Nav pullRight>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  