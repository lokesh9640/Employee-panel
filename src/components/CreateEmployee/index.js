import {useState} from 'react'
import './createmployee.css'

const CreateEmployee = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [designation, setDesignation] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log({name, email, designation})
    alert('Employee Created')
  }

  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="designation">Designation:</label>
          <input
            id="designation"
            type="text"
            value={designation}
            onChange={e => setDesignation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateEmployee
