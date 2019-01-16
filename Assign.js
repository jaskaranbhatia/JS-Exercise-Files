//Assign operator is used to copy an objects
let student = {
    name : 'Rahul',
    age : 12
}

let newStudent = Object.assign({},student);
console.log(newStudent);