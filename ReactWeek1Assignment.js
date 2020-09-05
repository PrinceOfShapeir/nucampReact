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
        /*
        if(this.students.includes(student.email)){
            console.log(`${student.email} already registered`);
        }*/
        if(this.students.filter(a=>a.email==student.email).length>0){
            console.log(`${student.email} already registered`);
        }
        else {
            
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp Web Dev Fundamentals.`)
            return [...this.students.reduce((students, student)=>students.concat(`${student.name} ${student.email}`), [])];
        }
    }

}