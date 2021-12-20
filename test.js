let john = {
    name: "John",
    age: 22,

    drive() {

        console.log(`${this.name}  ${this.age}`)

        let iAmAFunctionNotAMethod = () => {
            console.log(this)
        }

        iAmAFunctionNotAMethod()
    }
}

john.drive()

function newFunction() {
    console.log(this)
}

newFunction.call(john)