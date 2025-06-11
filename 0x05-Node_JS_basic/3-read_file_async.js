const fs = require('fs').promises;

function countStudents(rf) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(rf, 'utf8');
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      
      // Skip header if exists
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

      const result = {
        totalStudents: students.length,
        csStudents: {
          count: csStudents.length,
          list: csStudents.join(', ')
        },
        sweStudents: {
          count: sweStudents.length,
          list: sweStudents.join(', ')
        }
      };

      console.log(`Number of students: ${result.totalStudents}`);
      console.log(`Number of students in CS: ${result.csStudents.count}. List: ${result.csStudents.list}`);
      console.log(`Number of students in SWE: ${result.sweStudents.count}. List: ${result.sweStudents.list}`);
      
      resolve(result);
    } catch (err) {
      reject(new Error('Cannot load the database'));
    }
  });
}

module.exports = countStudents;