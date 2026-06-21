const { addStudent, viewStudents, deleteStudent, updateStudent } = require('./students/studentManager');

const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];
const arg3 = process.argv[5];

if (command === 'add') {
    addStudent(arg1, Number(arg2));
} else if (command === 'view') {
    viewStudents();
} else if (command === 'delete') {
    deleteStudent(Number(arg1));
} else if (command === 'update') {
    updateStudent(Number(arg1), arg2, Number(arg3));
} else {
    console.log('Unknown command. Use: add, view, delete, update');
}