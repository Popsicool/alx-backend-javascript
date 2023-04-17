export default function createReportObject (employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments (dept) {
      return Object.keys(dept).length
    }
  }
}
