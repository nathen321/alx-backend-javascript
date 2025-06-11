const fs = require('fs');

function countStudents(rf) {
  try {
    const data = fs.readFileSync(rf, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const csStudents = [];
    const sweStudents = [];
    for (const line of lines) {
      const [firstName, lastName, age, field] = line.split(',');
      if (field === 'CS') {
        csStudents.push(firstName);
      } else if (field === 'SWE') {
        sweStudents.push(firstName);
      }
    }
    console.log(`Number of students: ${lines.length - 1}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents}`);
  } catch (err) {
    throw new Error('Cannot load the database');
    }
  }


countStudents("database.csv");