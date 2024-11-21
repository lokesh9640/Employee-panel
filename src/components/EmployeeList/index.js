import {Link} from 'react-router-dom'
import './list.css'

const EmployeeList = () => {
  const employees = [
    {id: 1, name: 'Hukum', email: 'hukum@cstech.in', designation: 'HR'},
    {id: 2, name: 'Manish', email: 'manish@cstech.in', designation: 'Sales'},
  ]

  return (
    <div className="container">
      <h2>Employee List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.designation}</td>
              <td>
                <Link to={`/edit-employee/${emp.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList
