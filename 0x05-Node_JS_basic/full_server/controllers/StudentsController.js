import readDatabase from '../utils';

const allowed = ['CS', 'SWE'];
class StudentsController {
  static getAllStudents (request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((goupStudents) => {
        const resP = ['This is the list of our students'];
        const compare = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(goupStudents).sort(compare)) {
          resP.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', ')
          ].join(' '));
        }
        response.status(200).send(resP.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor (request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!allowed.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
      .then((goupStudents) => {
        let resT = '';

        if (Object.keys(goupStudents).includes(major)) {
          const group = goupStudents[major];
          resT = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(resT);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
