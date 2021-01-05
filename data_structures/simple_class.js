class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student("Emil", "Katz", 3);
let secondStudent = new Student("Blue", "Steele");

console.log("firstStudent", firstStudent);
console.log("secondStudent", secondStudent);