const name = "Prince"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Prince-kr-r')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "    Prince     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prince.com/prince%20kumar"

console.log(url.replace('%20', '-'));
console.log(url.includes('prince'));
console.log(url.includes('pankaj'));

console.log(gameName.split('-'));








