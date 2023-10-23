
//Base Class 
function Human (name, age) {
    this.name = name,
    this.age = age;
}

class Employee extends Human {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
}

const emp1 = new Employee("Ravi", 19, 10000000)

console.log(emp1)