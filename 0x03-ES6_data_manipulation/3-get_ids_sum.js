export default function getStudentIdsSum(students) {
  return students.reduce((acc, num) => acc + num.id, 0);
}
