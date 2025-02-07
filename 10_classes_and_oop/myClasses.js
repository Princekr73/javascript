// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const prince = new User("prince", "pri@gmail.com", "123")

// console.log(prince.encryptPassword());
// console.log(prince.changeUsername());

// behind the seen

function User (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const pan = new User("pan", "pan@gmail.com", "123")

console.log(pan.encryptPassword());
console.log(pan.changeUsername());

