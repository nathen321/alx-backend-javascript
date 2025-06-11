const fs = require('fs');

function countStudents(rf) {
  try {
    const data = fs.readFileSync(rf, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // Skip header if exists (assuming first line is header)
    const students = lines.slice(1);
    const csStudents = [];
    const sweStudents = [];

    students.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (field === 'CS') {
        csStudents.push(firstName);
      } else if (field === 'SWE') {
        sweStudents.push(firstName);
      }
    });

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;