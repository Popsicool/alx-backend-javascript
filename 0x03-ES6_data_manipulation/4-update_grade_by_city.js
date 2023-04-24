export default function updateStudentGradeByCity(students, city, grade) {
  const filt = students.filter((item) => item.location === city);
  const update = filt.map((item) => {
    for (const gr of grade) {
      if (gr.studentId === item.id) {
        item.grade = gr.grade; // eslint-disable-line no-param-reassign
      }
      if (item.grade === undefined) {
        item.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
    }
    return item;

    // grade.forEach(element => {
    //     if (item.id === element.studentId)
    //     {
    //         if (element.grade){
    //             item["grade"] = element.grade
    //         }
    //         else{
    //             item["grade"] = 'N/A';
    //         }
    //     }
    //     return element
    // });
  });
  return update;
}
