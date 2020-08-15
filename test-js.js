/* test code javascript cours openclassroom */

// declare a constant for no modify this 
const numbersOfBird = 5;

//declare and assign a variablejavascript
let numbersOfCats = 2;
let numbersOfDogs = 4;

// modify variable 

numbersOfCats = 3;

// Addition and subtraction

let numbersOfPets = numbersOfCats + numbersOfDogs;

let numbersOfPets2 = numbersOfDogs - numbersOfCats;

numbersOfCats += 2; //add 2 to variable 
numbersOfDogs -= 2 // substract to variable 

numbersOfDogs ++; // to add  1
numbersOfDogs --; // subtract 1

// diisplay variable with console.log(nameofvar);
console.log(numbersOfPets);

// Multiplication and division

let costPerProduct = 20;
let numberOfProducts = 5;
 
let totalCost = costPerProduct * numberOfProducts; // multiply variable 
 
let averageCostPerProduct = totalCost / numberOfProducts; // divose variable 

let numberOfCats = 2;

numberOfCats *= 6;  // numberOfCats =  2*6 = 12; 

numberOfCats /= 3;  // numberOfCats = 12/3 = 4;


//exersises 1
// Calculate totalShowTime here
// =====================================
let episodeTime = 45;
let commercialTime = 5;

let totalsEpisode = numberOfSeasons * numberOfEpisodes;

let totalEpisodeAndCommercialTime = episodeTime + commercialTime;

let totalShowTime = totalsEpisode * totalEpisodeAndCommercialTime;
// =====================or ================

let totalShowTime = (episodeTime + commercialTime) * numberOfSeasons * numberOfEpisodes;


// ceate constante ex2

// =====================================

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

// =====================================

// types of data

let episodeTitle = 'kingdom'; //string
let episodeDuration = 45; // integer
let episodeDuration2 = 45.5 // float
let hasBeenWatched = true; // Boolean true or false