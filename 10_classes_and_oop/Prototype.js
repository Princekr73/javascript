// let myName = "prince"
// let mychannel = "chai"

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.prince = function(){
    console.log(`prince is presentin all objects`);
    
}

Array.prototype.heyPrince = function(){
    console.log(`Prince says hello`);
    
}
// heroPower.prince()
// myHeros.prince()
// myHeros.heyPrince()
// heroPower.heyPrince()

// inheritance

const User = {
    name: "chai",
    email: "cjai@google"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport

}
Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"prince".trueLength()
"iceTea".trueLength()