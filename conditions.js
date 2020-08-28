// condition if/else

let clientIslogged = true;

if (clientIslogged){
  console.log('client is connected') // if boolean is true display message 
  
} else {
  console.log('client is not connected') // else boolean is false display other message
  
}

let numberClient = 5;

// verify if is smallest 
if (numberClient < 10){
  console.log(" smallest of  10")
  
} else {
  console.log("tallest of 10")
}

// verify if is tallest
if (numberClient > 2){
  console.log(" tallest of  2")
  
} else {
  console.log("smallest of 2")
}

// verify if is equals
if (numberClient == 5){
    console.log(" number equals")
    
  } else {
    console.log("not equals")
  }

// verify if is different
if (numberClient != 5){
    console.log(" different")
    
  } else {
    console.log("same")
  }

// verify if is smallest or equals 
if (numberClient <= 5){
    console.log(" smallest or equals")
    
  } else {
    console.log("tallest ")
  }
  
// verify if is tallest or equals  
if (numberClient >= 5){
    console.log(" tallest or equals")
    
  } else {
    console.log("smallest ")}


    // if else and else if

    let clientIslogged = true;
    let acceptedClient = 10;
    let numberofClient = 5;

    
    if (clientIslogged){
      console.log('client is connected')
      
    } else {
      console.log('client is not connected')
      
    }
    
    if (numberofClient == acceptedClient){
      console.log("full client")
    } else if (numberofClient < acceptedClient){
      console.log("add new client")
    } else {
      console.log("not add new clients")
    }

    class Episode {
      constructor(title, duration, minutesWatched) {
        this.title = title;
        this.duration = duration;
        
        // Add conditions here
        // =================================
        if (duration === minutesWatched) { // if episode has been watched is true else is false 
          this.hasBeenWatched = true;
        } else if (duration < minutesWatched) {
          this.hasBeenWatched = false;
        }    


    // difference == and === or != and !==
// &&  — ET logique — pour vérifier si deux conditions sont toutes les deux vraies ;

// ||   — OU logique — pour vérifier si au moins une condition est vraie ;

// !   — NON logique — pour vérifier si une condition n'est pas vraie. 
let userLoggedIn = true;
let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount; // true
userLoggedIn && userHasMegaPremiumAccount; // false

userLoggedIn || userHasPremiumAccount; // true
userLoggedIn || userHasMegaPremiumAccount; // true

!userLoggedIn; // false
!userHasMegaPremiumAccount; // true

class Episode {
  constructor(title, duration, minutesWatched) {
    this.title = title;
    this.duration = duration;
    // Add logic here
    // ======================
    if (minutesWatched === 0){
      this.watchedText = 'not yet watched';
      this.continueWatching = false;
      } else if (minutesWatched > 0 && minutesWatched < duration){
        this.watchedText = 'watching';
        this.continueWatching = true;
      } else if (minutesWatched === duration) {
        this.watchedText = 'watched';
        this.continueWatched = false;
      }
      
    
    // swicht

    let firstUser = {
      name: "Will Alexander",
      age: 33,
      accountLevel: "normal"
  };
  
  let secondUser = {
      name: "Sarah Kate",
      age: 21,
      accountLevel: "premium"
  };
  
  let thirdUser = {
      name: "Audrey Simon",
      age: 27,
      accountLevel: "mega-premium"
  };

  switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}

// add ternaire 

var result, number = 42;

result = (number < 10)? 'plus grand que 10' : 'plus petit que 10';

console.log(result);