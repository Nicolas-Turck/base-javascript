class UserPlayer {
    constructor(name, age, status){
        this.name = name;
        this.age = age;
        this.connected = status;
    }
} 
let allPlayer = []
let player1 = new UserPlayer("eder", 34, true )
allPlayer.push(player1)
let player2 = new UserPlayer("thiago", 6, true )
allPlayer.push(player2)
let player3 = new UserPlayer("eric", 50, true )
allPlayer.push(player3)
console.log(allPlayer)

const sortUser = () => {
    for (let user of allPlayer){
        if (user.age < 18){
            console.log("not entry "+ user.name);
        } else if (user.age >= 18){
            console.log("access Ok "+user.name)
        }
    }
}
sortUser()