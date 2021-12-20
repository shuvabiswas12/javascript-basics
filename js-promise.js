// "promise.all([])"  --> eta array er sequence onujayi result debe
// promise.race([])   --> eta jei promise ta age resolve hobe setar result ta age debe.


const promise_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved 1')
    }, 5000)
})

const promise_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("rejected 2")
    }, 5000)
})


// ei all() function ta array sequence onujayi resolve or reject er message gulo show korbe

Promise.all([promise_1, promise_2]).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


// ei race function ta jei promise ta age resolve or reject hobe seta ke age show korbe 

Promise.race([promise_1, promise_2]).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})




// sudu ekta promise hole code ta hobe nicher moto ....

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('single promise resolved')
    }, 8000)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})