// spread operator in object

const myObject = {
    city: 'Chittagong',
    country: "Bangladesh"
}

const newObject = {
    ...myObject,  // This is called spread operator
    city: "Dhaka" // changing the value of city
}

console.log(newObject)


// rest operator in object

const {k, m, ...other} = {
    k: "K",
    m: "M",
    j: "J",
    g: "G"
}

console.log(k, m)

console.log(other)






// spread operator in array

const myArray = [34, 12, 78, 43]

const newArray = [ ...myArray ]

console.log(newArray)


// rest operator in array
const [first, second, ...others] = newArray

console.log(first, second)

console.log(others)


// string to array
const myString = "This is my String"
const stringToArray = [ ...myString ]

console.log(stringToArray)
