import React, { Component } from 'react';
import {Label, Pager} from 'react-bootstrap';
import Data from '../stores/Data';

export default class ViewLocation extends Component {
  
    constructor(props){
        super(props);

        this.state = {
          index: this.props.match.params.index,
          name: Data.locationsList[this.props.match.params.index].name, 
          adress: Data.locationsList[this.props.match.params.index].adress, 
          coordinates: Data.locationsList[this.props.match.params.index].coordinates, 
          category: Data.locationsList[this.props.match.params.index].category,
        }
    }
  
    previous=()=>{
        if(this.state.index == 0){
            alert("This is the firt location");
        }
        else{
            let index = (this.state.index)-1;
            this.setState({
                index: index,
                name: Data.locationsList[index].name, 
                adress: Data.locationsList[index].adress, 
                coordinates: Data.locationsList[index].coordinates, 
                category: Data.locationsList[index].category,
            });
        }
    }

    next=()=>{
        if(this.state.index == Data.locationsList.length-1){
            alert("This is the last location");
        }
        else{
            let i = parseInt(this.state.index)+1;
            this.setState({
                index: i,
                name: Data.locationsList[i].name, 
                adress: Data.locationsList[i].adress, 
                coordinates: Data.locationsList[i].coordinates, 
                category: Data.locationsList[i].category,
            });
        }
    }
  
    render() {
        return (
            <div>

                <div style={{"width":"70%","margin": "auto", "marginTop":"30px", "marginBottom":"20px"}}>
                    <Pager>
                    <Pager.Item onClick={this.previous}><span style={{"color": "#c12e2a"}}>&larr; Previous</span></Pager.Item>
                    <Pager.Item onClick={this.next}><span style={{"color": "#c12e2a"}}>Next &rarr;</span></Pager.Item>
                    </Pager>

                    <h4><span style={{"fontWeight":"bold"}}>Name:</span> {this.state.name} </h4>
                    <h4><span style={{"fontWeight":"bold"}}>Adress:</span> {this.state.adress} </h4>
                    <h4><span style={{"fontWeight":"bold"}}>Coordinates:</span> {this.state.coordinates} </h4>
                    <h4><span style={{"fontWeight":"bold"}}>Category:</span> <Label bsStyle="danger"> {this.state.category} </Label></h4>
                </div>

                <div  style={{"textAlign": "center"}}>
                    <iframe width="70%" height="350px" frameborder="0" 
                        src= {"https://www.google.com/maps/?q=" + this.props.coordinates}  //need API KEY to make it work
                        style={{"border":"1px solid #d9d9d9"}}
                    >
                    </iframe>
                </div>
            </div>
        );
    }
}
