const remoteURL = "http://localhost:5002"

export const getEmployeeById = (employeeId) => {
  //be sure your Employees have good data and related to a location and Employee
  return fetch(`${remoteURL}/employees/${employeeId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
  .then(res => res.json())
}

export const deleteEmployees = (id) => {
  return fetch(`${remoteURL}/employees/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
}

export const addEmployee = (newEmployee) => {
  return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
  }).then(response => response.json())
}