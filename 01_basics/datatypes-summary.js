// Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 3434334343434344n


// Reference (Non primitive)

// Array, Objects, Functions

const hero = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Prince",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof outsideTemp);



//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "princerajkumar"
let anothername = myYoutubename
anothername = "newchannel"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "prince@google.com"

console.log(userOne.email);
console.log(userTwo.email);


