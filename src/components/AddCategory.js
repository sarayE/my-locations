import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Redirect} from 'react-router-dom';
import {Panel, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';
import Data from '../stores/Data';

class AddCategory extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
          name : ""
        }
    }

    addCategory=(e)=> {
        e.preventDefault();
        Data.addCategory(this.state.name);
        this.props.history.push('/Categories');
    }
    
    render() {
      return (
        <Panel style={{"width":"50%","margin": "auto"}}>
        <Panel.Heading>Add Category</Panel.Heading>
        <Panel.Body>            
            <form style={{"width":"60%","margin": "auto"}} onSubmit={this.addCategory}>
                <FormGroup controlId="formControlsText">
                <ControlLabel>Name</ControlLabel>
                <FormControl 
                    type="text" 
                    placeholder="Category Name" 
                    value={this.state.name} 
                    onChange={(e) => this.setState({
                        name: e.target.value
                    })}
                    required/>
                </FormGroup>

                <Button type="submit">
                Add
                </Button>
            </form>
        </Panel.Body>
      </Panel>
      );
    }
}


export default observer(AddCategory);

