import { extendObservable, runInAction, configure } from 'mobx';

configure({ enforceActions: true }) //useStrict;


class Data {

    constructor() {
        extendObservable(this, {
            categoriesList: ["Family", "Friends", "Good food", "Point"],
            locationsList: [
                {name: "A", adress: "Holon", coordinates: "32.0193121,34.7804076", category: "Point"},
                {name: "Mom Home", adress: "Holon", coordinates: "32.0193121,34.7804076", category: "Family"},
                {name: "Tal Home", adress: "Galya", coordinates: "32.0193121,34.7804076", category: "Family"},
                {name: "Ziv Home", adress: "Ramat-Gan", coordinates: "32.0193121,34.7804076", category: "Friends"},
                {name: "Burgers", adress: "Rishon", coordinates: "32.0193121,34.7804076", category: "Good food"},
                {name: "B", adress: "Galya", coordinates: "32.0193121,34.7804076", category: "Point"},
            ]

        });
    }

    //sort
    sortLocations(locationSorted) {
        runInAction(() => {
            this.locationsList= locationSorted;
        });
    }

    //Add
    addCategory(name) {
        runInAction(() => {
            this.categoriesList.push(name);
        });
    }

    addLocation(location) {
        runInAction(() => {
            this.locationsList.push(location);
        });
    }

    
    //Edit
    editCategory(editedName, index){
        runInAction(() => {
            this.categoriesList[index] = editedName;
        });
    }

    editLocation(editedLocation, index){
        runInAction(() => {
            this.locationsList[index].name = editedLocation.name;
            this.locationsList[index].adress = editedLocation.adress;
            this.locationsList[index].coordinates = editedLocation.coordinates;
            this.locationsList[index].category = editedLocation.category;
        });
    } 

    //Remove
    removeCategory(index){
        runInAction(() => {
            this.categoriesList.splice(index,1);
        });
    }

    removeLocation(index){
        runInAction(() => {
            this.locationsList.splice(index,1);
        });
    }
    


}


var data = new Data();
export default data;