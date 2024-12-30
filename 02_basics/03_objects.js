// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Prince",
    "full name": "Prince Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "prince@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "prince@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "prince@micro.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   // string inturpolation
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

