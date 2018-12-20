import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import { observer } from 'mobx-react';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import Footer from './components/Footer'
import Categories from './components/Categories'
import Locations from './components/Locations'
import ViewLocation from './components/ViewLocation';
import AddCategory from './components/AddCategory';
import AddLocation from './components/AddLocation';
import EditLocation from './components/EditLocation';
import EditCategory from './components/EditCategory';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNavbar/>
      
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Categories" component={Categories}/>
            <Route path="/Locations" component={Locations}/>
            
            <Route path="/AddCategory" component={AddCategory}/>
            <Route path="/AddLocation" component={AddLocation}/>

            <Route path="/ViewLocation/:index" render={(props) => <ViewLocation {...props}/>}/>

            <Route path="/EditCategory/:index" render={(props) => <EditCategory {...props}/>}/>
            <Route path="/EditLocation/:index" render={(props) => <EditLocation {...props}/>}/>
     
          </Switch>

          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}


export default observer(App);