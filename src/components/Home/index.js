import './home.css'

import {useHistory} from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const onClickButton = () => {
    history.push('/login')
  }
  return (
    <div className="bg-container">
      <div className="card">
        <h1>WELCOME</h1>

        <button type="button" onClick={onClickButton}>
          Click
        </button>
      </div>
    </div>
  )
}

export default Home
