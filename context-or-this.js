let john = {
    firstName: "John",
    lastName: "Doe",

    driveCar() {
        // this is an arrow function
        let iAmAFunctionNotAMethod_2 = () => console.log(this)

        iAmAFunctionNotAMethod_2()

        function iAmAFunctionNotAMethod() {
            console.log(this)
            // The "this" keyword points towards the object
            // that is executing the current function
        }

        iAmAFunctionNotAMethod()

        console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
}

john.driveCar()


// this is an standalone function
function breath() {
    console.log(this.firstName + " " + this.lastName)
}

breath.call(john)


