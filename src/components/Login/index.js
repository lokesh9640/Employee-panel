import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './login.css'

const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'admin panel'
  })

  const handleLogin = e => {
    e.preventDefault()
    if (username === `${username}` && password === `${username}`) {
      localStorage.setItem('username', username)
      history.push('/dashboard')
    } else {
      setError('*Invalid username or password')
    }
  }

  return (
    <div className="container">
      <div>
        <h2>Login Page</h2>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            placeholder="Enter Name"
            id="userName"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            placeholder="Enter Password"
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}

export default Login
