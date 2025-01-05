const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js cource",
        price: 2999
    },
    {
        itemName: "py cource",
        price: 4999
    },
    {
        itemName: "mobile dev cource",
        price: 5999
    },
    {
        itemName: "data science cource",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);

