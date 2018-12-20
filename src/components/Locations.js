import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import {Button, Panel, ListGroup, Table, Glyphicon} from 'react-bootstrap';
import Data from '../stores/Data';
import '../styles/Locations.css';

class Locations extends Component {
    
    sortByAlphabets=(LocationsProp)=>{
        
        let mySortedList = [];

        if(LocationsProp == "name"){
            Data.locationsList.sort((a, b) => a.name.localeCompare(b.name)).map((location) =>
            mySortedList.push(location))
        }
        else if(LocationsProp == "category"){
            Data.locationsList.sort((a, b) => a.category.localeCompare(b.category)).map((location) =>
            mySortedList.push(location))
        }

        Data.sortLocations(mySortedList);
    }

    remove=(index)=>{
        Data.removeLocation(index);
    }

    render() {
      return (
        <Panel bsStyle="danger" className="panelLocation">
            <Panel.Heading>Locations
                <Link to="/AddLocation"> <button className="plusBtn">+</button> </Link>
            </Panel.Heading>

            <Table responsive>
                <thead>
                    <tr>
                        <th style={{"cursor": "pointer"}} onClick={()=>this.sortByAlphabets("name")}>Name</th>
                        <th>Address</th>
                        <th>Coordinates</th>
                        <th style={{"cursor": "pointer"}} onClick={()=>this.sortByAlphabets("category")}>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.locationsList.map((location, index) =>
                            <tr key={index} className="hover-row"> 
                                <td>{location.name}</td>
                                <td>{location.adress}</td>
                                <td>{location.coordinates}</td>
                                <td>{location.category}</td>
                                <td>
                                    <span>
                                        <Button bsStyle="link" onClick={()=>this.remove(index)}><Glyphicon glyph="glyphicon glyphicon-trash"/></Button>
                                        <Link to={`/ViewLocation/${index}`}><Button bsStyle="link"><Glyphicon glyph="glyphicon glyphicon-eye-open"/></Button></Link>
                                        <Link to={`/EditLocation/${index}`}><Button bsStyle="link"><Glyphicon glyph="glyphicon glyphicon-edit"/></Button></Link>
                                    </span>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
      </Panel>
      );
    }
}



export default observer(Locations);

