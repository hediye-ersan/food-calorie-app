
import { Route } from 'react-router-dom'
import './reset.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Route path="/" component={Home} />
    </>
  )
}

export default App
