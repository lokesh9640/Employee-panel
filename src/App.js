import {Route, BrowserRouter} from 'react-router-dom'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CreateEmployee from './components/CreateEmployee'
import EmployeeList from './components/EmployeeList'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Dashboard" component={Dashboard} />
    <Route exact path="/create-employee" component={CreateEmployee} />
    <Route exact path="/employee-list" component={EmployeeList} />
  </BrowserRouter>
)

export default App
