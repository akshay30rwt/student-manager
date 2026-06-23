const fs = require('fs');

const FILE_PATH = './data.json';

function readData() {
    const fileContent = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
}

function writeData(data) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

function addStudent(name, age) {
    const data = readData();

    const maxId = data.students.length > 0
        ? Math.max(...data.students.map(student => student.id))
        : 0;

    const newStudent = {
        id: maxId + 1, 
        name: name,
        age: age
    }
    data.students.push(newStudent);
    writeData(data);
    console.log(`Student ${name} added successfully`);
}

function viewStudents() {
    const data = readData();
    if(data.students.length === 0) {
        console.log('No students found');
        return;
    }
    data.students.forEach(student => {
        console.log(`ID: ${student.id} | Name: ${student.name} | Age: ${student.age}`);
    });
}

function deleteStudent(id) {
    const data = readData();
    const index = data.students.findIndex(student => student.id === id);

    if(index === -1) {
        console.log(`Student with ID ${id} not found`);
        return;
    }

    const deletedStudent = data.students[index];
    data.students.splice(index, 1);
    writeData(data);
    console.log(`Student ${deletedStudent.name} deleted successfully`);
}

function updateStudent(id, newName, newAge) {
    const data = readData();
    const index = data.students.findIndex(student => student.id === id);

    if(index === -1) {
        console.log(`Student with ID ${id} not found`);
        return;
    }
    data.students[index].name = newName;
    data.students[index].age = newAge;
    writeData(data);
    console.log(`Student ${data.students[index].name} updated successfully`);
}

module.exports = { addStudent, viewStudents, deleteStudent, updateStudent };