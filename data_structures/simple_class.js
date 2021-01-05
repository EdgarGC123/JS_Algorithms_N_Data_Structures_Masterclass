class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    makrLate(){
        this.tardies += 1;
        if(this.tardies >=3){
            return "YOU ARE EXPELLED!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length;
    }
    static EnrollStudents(){
        return "Enroll Students!"
    }
}

let firstStudent = new Student("Emil", "Katz", 3);
let secondStudent = new Student("Blue", "Steele");

console.log("firstStudent", firstStudent);
console.log("secondStudent", secondStudent);