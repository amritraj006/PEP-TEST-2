import Question1 from './pages/Question1'
import Question2 from './pages/Question2'
import Question3 from './pages/Question3'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question1" element={<Question1 />} />
      <Route path="/question2" element={<Question2 />} />
      <Route path="/question3" element={<Question3 />} />
    </Routes>
  )
}

export default App