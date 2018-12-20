import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Panel, FormGroup, ControlLabel, Button, FormControl, SplitButton, MenuItem} from 'react-bootstrap';
import Data from '../stores/Data';

class EditLocation extends Component {
    
    constructor(props){
        super(props);

        this.state = {
          name: Data.locationsList[this.props.match.params.index].name, 
          adress: Data.locationsList[this.props.match.params.index].adress, 
          coordinates: Data.locationsList[this.props.match.params.index].coordinates, 
          category: Data.locationsList[this.props.match.params.index].category,
        }
    }


    editLocation =(e)=> {
        e.preventDefault();

        let editedLocation = {
            name: this.state.name, 
            adress: this.state.adress, 
            coordinates: this.state.coordinates, 
            category: this.state.category,
        }
        Data.editLocation(editedLocation ,this.props.match.params.index);
        this.props.history.push('/Locations');
    }

    render() {
      return (
        <Panel style={{"width":"50%","margin": "auto"}}>
        <Panel.Heading>Add Location</Panel.Heading>
        <Panel.Body>
            
            <form style={{"width":"60%","margin": "auto"}} onSubmit={this.editLocation}>
                
                <FormGroup controlId="formControlsText">
                <ControlLabel>Name</ControlLabel>
                <FormControl 
                    type="text" 
                    placeholder="Name" 
                    value={this.state.name} 
                    onChange={(e) => this.setState({
                        name: e.target.value
                    })}
                    required
                />
                </FormGroup>

                <FormGroup controlId="formControlsText">
                <ControlLabel>Address</ControlLabel>
                <FormControl 
                    type="text" 
                    placeholder="Address" 
                    value={this.state.adress} 
                    onChange={(e) => this.setState({
                        adress: e.target.value
                    })}
                    required
                />
                </FormGroup>

                <FormGroup controlId="formControlsText">
                <ControlLabel>Coordinates</ControlLabel>
                <FormControl 
                    type="text" 
                    placeholder="Coordinates" 
                    value={this.state.coordinates} 
                    onChange={(e) => this.setState({
                        coordinates: e.target.value
                    })}
                    required
                />
                </FormGroup>

                <FormGroup controlId="formControlsText">
                <ControlLabel>Category</ControlLabel>

                <FormControl 
                    componentClass="select" 
                    value={this.state.category}
                    onChange={(e) => this.setState({category: e.target.value})} 
                  >
                    {
                        Data.categoriesList.map((category, index) => 
                            <option key={index}>{category}</option>
                        )
                    }
                </FormControl>


                </FormGroup>
                
                <br/>
                <Button type="submit">
                Ok
                </Button>
            </form>

        </Panel.Body>
      </Panel>
      );
    }
}


export default observer(EditLocation);

