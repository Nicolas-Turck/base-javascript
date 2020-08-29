class UserPlayer {
    constructor(name, age, status){
        this.name = name;
        this.age = age;
        this.connected = false;
    }
} 

let player1 = new UserPlayer("eder", 34, true )
let player2 = new UserPlayer("thiago", 6, true )
let player3 = new UserPlayer("eric", 50, true )
console.log(player1)