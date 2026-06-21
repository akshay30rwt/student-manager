const fs = require('fs');

const fileContent = fs.readFileSync('./data.json', 'utf-8');

let jsonObject = JSON.parse(fileContent);

jsonObject.students.push({ id: 2, name: "Rahul", age: 22 });


fs.writeFileSync('./data.json', JSON.stringify(jsonObject, null, 2));
console.log('Data written successfully');