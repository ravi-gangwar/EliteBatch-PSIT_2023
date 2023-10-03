
function Student(name, age, branch, section) {

    this.name = name;
    this.age = age;
    this.branch = branch,
    this.section = section


    console.log("inside the Constractor", this);

}
student1 = new Student("Ravi", 19, "IT","2B")
console.log(student1.name)
console.log(student1)

try {
    const Student = (name, age, branch, section) => {

        this.name = name;
        this.age = age;
        this.branch = branch,
        this.section = section
        // we cant use constractor function in arrow function
    
    }

    student2 = new Student("Ravi", 19, "IT","2B")
    console.log(student2)
} catch (error) {
    console.log("Arrow Function Error.");
}
