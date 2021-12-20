
let pets = [
    {name: "Meowsalot", species: "cat", age: 2},
    {name: "Barksalot", species: "dog", age: 3},
    {name: "Purrsloud", species: "cat", age: 8}
]

// push() method returns the index number
console.log(pets.push({name: "Puppster", species: "dog", age: 1}))

console.log(pets)


// map function returns an array of objects
let ourTest = pets.map(nameOnly)

function nameOnly(x) {
    return x.name
}

console.log(ourTest)


// filter function calls the dogsOnly function ones for each object.
// if it return true then it creates an array. If not true then it doesn't create an array

let dogs = pets.filter(dogsOnly)

function dogsOnly(x) {
    return x.species == "dog"
}

console.log(dogs)

// here is an another example of filter function

let onlyBabyDogs = pets.filter(onlyBabies)

function onlyBabies(x) {
    return x.age < 3
}

console.log(onlyBabyDogs)


let babyDogsName = pets.filter(dogsOnly).filter(onlyBabies).map(nameOnly)

console.log(babyDogsName)