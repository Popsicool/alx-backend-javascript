export default function createIteratorObject (report) {
  const list = []
  const keys = Object.keys(report.allEmployees)
  keys.forEach((key, index) => {
    for (const name of report.allEmployees[key]) {
      list.push(name)
    }
  })
  return list
}
