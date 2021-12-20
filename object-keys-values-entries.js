const myObject = {
    k: "city",
    j: "country",
    g: "Singapur"
}

console.log(Object.values(myObject))  // only show the values  
//  [ 'city', 'country', 'Singapur' ]



console.log(Object.entries(myObject))  // convert all key value pair into an array. And return an array of arrays. For example:-    
//  [ [ 'k', 'city' ], [ 'j', 'country' ], [ 'g', 'Singapur' ] ]


// we can find out the values from an object using the way given below
Object.keys(myObject).forEach(obj => {
    console.log(myObject[obj])
});



// fromEntries()  ---> This method will reform the key and value pair. For example: { k: 'city', j: 'country', g: 'Singapur' }

const secondArray = [ [ 'k', 'city' ], [ 'j', 'country' ], [ 'g', 'Singapur' ] ]

console.log(Object.fromEntries(secondArray))