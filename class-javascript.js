//  create class 
// create claas with word (class + name of class)
class Episode {
    // i use constructor for create attribut of object 
    constructor(title, duration, hasBeenWatched){
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  // i create object with parameters 
  let firstEpisode = new Episode("croc blanc", 45, true);
  
  let secondEpisode = new Episode("croc noir", 50, false);
  
  let thirdEpisode = new Episode("croc rouge", 60, true);

  console.log(firstEpisode)


  // class and add items in array and loops in for search one items

  class UserPlayer {
    constructor(name, age, connected){
        this.name = name;
        this.age = age;
        this.connected = connected;
    }
    
}
let gets = []
let player = new UserPlayer("eder", 54, true );
gets.push(player)
 let player1 = new UserPlayer("thiago", 6, true );
gets.push(player1)
 let player2 = new UserPlayer("eric", 50, false );
gets.push(player2)

console.log(gets)
for (let user of gets){
  if (user.name === "thiago"){
    console.log(user)
  }
}

// class with items and add items in array if booleanis true
class UserPlayer {
  
  constructor(name, age, connected){
      
      this.name = name;
      this.age = age;
      this.connected = connected;
     
    
  } 
  
}
let gets = []
let getsconnected = []
let player = new UserPlayer("eder", 54, true );
gets.push(player)
let player1 = new UserPlayer("thiago", 6, true );
gets.push(player1)
let player2 = new UserPlayer("eric", 50, false );
gets.push(player2)

console.log(gets)
for (let user of gets){
if (user.connected === true){
  getsconnected.push(user)
}
}
console.log(getsconnected)
 