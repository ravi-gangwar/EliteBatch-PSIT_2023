class Student {
    #password
    constructor(name, age, password){
        this.name = name,
        this.age = age,
        this.#password = password
    }

    set passwordSet(p){
        this.#password = p;
    }

    get passwordGet(){
        return this.#password;
    }
}

student1 = new Student("Ravi", 19);
console.log(student1);
console.log(student1.passwordSet("ravi7465"))
console.log(student1.passwordGet())