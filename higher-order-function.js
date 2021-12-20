let myColor = ["red", "orange", "blue"]

myColor.forEach(saySomethingNice)

function saySomethingNice(color) {
    console.log("The color " + color +" is a great color.")
}




// higher order function

function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier
    }
}

let doubleMe = createMultiplier(2)
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

console.log(doubleMe(10))
console.log(tripleMe(10))
console.log(quadrupleMe(10))