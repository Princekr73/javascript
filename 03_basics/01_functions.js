function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
    
}
// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);    
}
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
        
}
const result = addTwoNumbers(3, 5)
// console.log("Result ", result);

function loginUserMessage(username = "pankaj"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Prince"));
// console.log(loginUserMessage());
