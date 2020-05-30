//decided to take time relative

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//array of people
var people = {};
const findLocation = (x,y) => {
    for(var i = 0; i<locations.length; i++){
        if(x === locations[i].coordinates.x && y === locations[i].coordinates.y){
            return locations[i];
        }
    }
}
//function to add a new employee
const addPerson = (name,id,age,currentLocation, infected) => {
    var person = {
        id: '',
        name: '',
        locations: [],
        isInfected: false
    }
    person.name = name;
    person.age = age;
    person.locations.push(currentLocation);
    person.id = id;
    person.isInfected = infected;
    people[id] = person;

}
var locations = [];
addPerson('Shrey', '1', 18, {x:21 , y:3},false);
addPerson('Sohum', '2', 18, {x:13 , y:1},true);
addPerson('Sameer', '3', 18, {x:15 , y:2},true);
addPerson('Anya', '4', 18, {x:4 , y:3},false);
addPerson('Saurav', '5', 18, {x:25 , y:4},true);
addPerson('Harit', '6', 18, {x:19 , y:5},true);
addPerson('Suresh', '7', 18, {x:17 , y:6},false);
addPerson('Preetam', '8', 18, {x:8 , y:2},false);
addPerson('Sohail', '9', 18, {x:5 , y:3},true);

//making sample locations
for(var i = 0; i<30; i++){
    for(var j = 0; j<30; j++){
        var coordinates = {
            x: i,
            y: j
        }
        // console.log(coordinates);
        const objToBePushed = {
            coordinates: coordinates,
            isDanger: false,
            time: 0
        }
        locations.push(objToBePushed);
        // console.log(locations[coordinates]);
    }
}


// addPerson('shrey', '43214', 45, {x: 54, y: 55});
//to be triggered on every location change

const onLocationChange = (x,y,idOfPersonWhoChangedLocations, time) => {
    var personWhoChangedLocations = people[idOfPersonWhoChangedLocations];


     const coords = {
         x: x,
         y: y
     }
     personWhoChangedLocations.locations.push(coords)
     var location = findLocation(x, y);

     if(personWhoChangedLocations.isInfected){
         location.isDanger = true;
         location.time = time;
        //  displayMapAsGrid(locations);
         //we don't need to map, that'll just slow it down
     }
     else{
         if(location.isDanger){
             console.log("ALERT: " + personWhoChangedLocations.name);
             personWhoChangedLocations.isInfected = true;
             //we can optionally mark the person as infected
         }
     }
}

const displayMapAsGrid = (locations) => {
    var grid = new Array(30);
    for(var i = 0; i<30; i++){
        grid[i] = new Array(30);
    }
    for(var i = 0; i<locations.length; i++){
        const location = locations[i];

        if(location.isDanger){
            grid[location.coordinates.y][location.coordinates.x] = 1;
        }
        else{
            grid[location.coordinates.y][location.coordinates.x] = 0;
        }
    }
    for(var i = 0; i<30; i++){
        console.log(...grid[i]);
    }

}

// displayMapAsGrid(locations);

//movement simulations


const simulateMovement = (people) => {
    for(var id in people){
        var person = people[id];
        console.log(person.name + " starts moving")
        if(person.isInfected){
            console.log(person.name + " is infected");
        }
        const length = person.locations.length;
        const currentLocation = person.locations[length-1];

        var x = currentLocation.x;
        var y = currentLocation.y;
        for(var i = 0; i<10; i++)
        {
            onLocationChange(x,y,person.id,i);
            x = getRandomInt(30);
            y = getRandomInt(30)
        }
    }
}


simulateMovement(people);

displayMapAsGrid(locations);

// console.log("Final grid 1 represent infected blocks, 0 represent non infected blocks");