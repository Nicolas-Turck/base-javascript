// loops For

let numberOfCookies = 5;
for (i=0; i < numberOfCookies; i++ ){
  console.log("cookies eat");
}
// for in 
let friends =["richard", "steve", "bill"]

for (let i in friends){
  console.log("my friends is " + friends[i]);
}

// for of 
let myPets = ["bird", "dog", "cat"]

for (pets of myPets){
  console.log("my pets are "+ pets );
}

const myAnimals = [
    {type : "dog", name : "brasko"},
    {type: "cat", name: "mowgli"},
    {type: "birds", name:"pepito"}
    ]
  for (let pets of myAnimals){
    console.log("my " + pets.type + " is name is " + pets.name);
  }

// loops While
let numberOfCookies = 6;
let numberOfChild= 4;

let numberOfChildEat =0;

while (numberOfCookies > 0 && numberOfChild > 0){
  numberOfChildEat ++;
  numberOfCookies --;
  numberOfChild --;
  console.log("child eat Cookies");
}console.log("all child eat Cookies");