
class Doctor {

    // constructor
    constructor(name, visit_fee, phone_no) {
        this.name = name
        this.visit_fee = visit_fee
        this.phone_no = phone_no
    }

    // method
    get_all() {
       return 'name: ' + this.name + '\nVisit_fee: ' + this.visit_fee + '\nPhone no: ' + this.phone_no
    }
}

// object of Doctor class
let doctor = new Doctor("Dipankar Ghosh", 300, '031-72648')
console.log(doctor)

console.log(doctor.get_all())



