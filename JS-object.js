let cat = {
    name: 'Fluffy',
    age: 4,
    food: {
        favourite: "Tuna",
        leastFavourite: "Orange"
    },
    eyeColor: "Brown",
    meow() {
        console.log("Sounds is meooowwww!")
    }
}


console.log(cat.food.favourite)
console.log(cat.meow())
