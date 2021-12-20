const doSomething =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task Complete!')
        }, 5000)
    })
}


// caller function must be async and so we put here 'async' before arrow function.

const client = async () => {
    const res = await doSomething()  // This line will return a promise and have to await sometimes for that. So, we must right 'await' before doSomething() function.

    console.log(res)
}


client()

