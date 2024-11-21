import {Link, useHistory} from 'react-router-dom'
import './dashboard.css'

const Dashboard = () => {
  const username = localStorage.getItem('username')
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('username')
    history.push('/Login')
  }

  return (
    <div className="container">
      <nav>
        <div>
          <Link className="link" to="/employee-list">
            Employee List
          </Link>
          <Link className="link" to="/create-employee">
            Create Employee
          </Link>
        </div>
      </nav>

      <header>
        <h2>Welcome Admin Panel</h2>
        <p className="name">
          WELCOME <span className="spanEl">{username}</span>{' '}
        </p>
        <button className="button" type="button" onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  )
}

export default Dashboard
