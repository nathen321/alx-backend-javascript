export default function getListStudentIds(argument) {
  if (argument instanceof Array){
    return argument.map((x) => x['id'])
  } else {
    return []
  }
}
