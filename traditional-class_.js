
let Doctor = function(name, visitor_fee, phone_no) {
    this.name  = name
    this.visitor_fee = visitor_fee
    this.phone_no = phone_no
}

// instance method
Doctor.prototype.getAll = function() {
   return "name: " + this.name + "\nVisitor_fee: " + this.visitor_fee_fee + '\nPhone no: ' + this.phone_no
}

// class function
Doctor.showName = function() {
    console.log("\nFrom class method...")
    return "\nname : " + this.name
}



// object of Doctor class
let doctor = new Doctor("Dishani Ghosh", 400, '099-1846836')

console.log(doctor)

console.log(doctor.getAll())

console.log(Doctor.showName())
