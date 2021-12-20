// find() vs filter() in JS

let myArray = ["java", "c++", "python", "flutter"]

// question:- Find all of element but not "flutter".

// this filter() method return an array that fulfill the condition.
let myArrayAnswer = myArray.filter((element) => {
  return element != "flutter"
})

console.log("From filter method:= " + myArrayAnswer)

// this find() method return only first matched element.
myArrayAnswer = myArray.find((element) => {
  return element != "flutter"
})

console.log("From find method:= " + myArrayAnswer)

// some other functionality of filter() method in JS.
myArrayAnswer = myArray.filter((element, index, array) => {
  console.log(`\n "${element}" from index ${index} is searching from array ${array}`)
})
