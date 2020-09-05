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
            
            this.students.push(student);
            console.log(`Registering ${student} to the bootcamp Web Dev Fundamentals.`)
            return this.students;
        }
    }

}