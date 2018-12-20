import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link} from 'react-router-dom';
import {Button, Panel, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import Data from '../stores/Data';
import '../styles/Categories.css';

class Categories extends Component {

    
    remove=(index)=>{
        Data.removeCategory(index);
    }

    render() {
      return (
        <Panel bsStyle="danger" className="panelCategory">
            <Panel.Heading>Categories
                <Link to="/AddCategory"> <button className="plusBtn">+</button> </Link>
            </Panel.Heading>
            <ListGroup>
              {
                Data.categoriesList.map((name, index) =>
                    <ListGroupItem key={index} className="hover-row">
                        {name}
                        <span>
                            <Button bsStyle="link" onClick={()=>this.remove(index)}><Glyphicon glyph="glyphicon glyphicon-trash"/></Button>
                            <Link to={`/EditCategory/${index}`}><Button bsStyle="link"><Glyphicon glyph="glyphicon glyphicon-edit"/></Button></Link>
                        </span>
                    </ListGroupItem>
                )
              }
            </ListGroup>
      </Panel>
      );
    }
}


export default observer(Categories);

