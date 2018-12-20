import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Panel, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';
import Data from '../stores/Data';

class EditCategory extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
          name : Data.categoriesList[this.props.match.params.index]
        }
    }

    editCategory =(e)=> {
        e.preventDefault();
        Data.editCategory(this.state.name ,this.props.match.params.index);
        this.props.history.push('/Categories');
    }
    
    render() {
      return (
        <Panel style={{"width":"50%","margin": "auto"}}>
            <Panel.Heading>Add Category</Panel.Heading>
            <Panel.Body>            
                <form style={{"width":"60%","margin": "auto"}} onSubmit={this.editCategory}>
                    <FormGroup controlId="formControlsText">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl 
                        type="text" 
                        placeholder="Category Name" 
                        value={this.state.name} 
                        required
                        onChange={(e) => this.setState({
                            name: e.target.value
                        })}                    
                    />
                    </FormGroup>

                    <Button type="submit">
                    Ok
                    </Button>
                </form>
            </Panel.Body>
      </Panel>
      );
    }
}

export default observer(EditCategory);

