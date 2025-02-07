const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, vlaue] of Object.entries(chai)) {
    if (typeof vlaue !== 'function') {
        console.log(`${key} : ${vlaue}`);
        
    }
}





