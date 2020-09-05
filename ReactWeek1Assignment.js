class Student {
    constructor (name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }

}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student){
        if(this.students.contains(student.email){
            console.log("already registered");
        }
        else {
            
            this.students.push(student.email);
            console.log(`Registering ${student.email} to the bootcamp Web Dev Fundamentals.`)
            return this.students;
        }
    }

}