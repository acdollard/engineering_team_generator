const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor(name, id, email, office_number){
        super(name, id, email, "Manager")
        this.office_number = office_number; 
    }

        getOfficeNumber() {
            return this.officeNumber;
        }
}

module.exports = Manager; 