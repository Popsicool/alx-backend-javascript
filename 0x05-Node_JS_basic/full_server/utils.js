const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const file = data.toString('utf-8').trim().split('\n');
      const students = {};
      const headings = file[0].split(',');
      const studentsProps = headings.slice(0, headings.length - 1);

      for (const line of file.slice(1)) {
        const student = line.split(',');
        const studentProps = student.slice(0, student.length - 1);
        const field = student[student.length - 1];
        if (!Object.keys(students).includes(field)) {
          students[field] = [];
        }
        const oneRecord = studentsProps.map((prop, idx) => [prop, studentProps[idx]]);
        students[field].push(Object.fromEntries(oneRecord));
      }
      resolve(students);
    }
  });
});

module.exports = readDatabase