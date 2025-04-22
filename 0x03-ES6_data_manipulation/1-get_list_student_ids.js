export default function getListStudentIds(argument) {
  if (!Array.isArray(argument)){
      return []
  } else {
    return argument.map((x) => x['id'])
  }
}
