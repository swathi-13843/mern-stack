const employee = {
    name: "John Doe",
    basic: 50000,
    bonus: 10000,
    salary : function() {
        console.log(this.basic + this.bonus);
    }
}
employee.salary(); // 60000

//this keyword refers to the current object, in this case, employee.
//  So, this.basic and this.bonus refer to the basic and bonus properties of the employee object.