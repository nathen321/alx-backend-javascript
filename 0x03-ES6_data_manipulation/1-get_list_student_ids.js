export default function getListStudentIds(argument) {
  let newArr = [];
  if (argument instanceof Array){
    return argument.map((x) => x['id'])
  } else {
    return newArr
  }
}
