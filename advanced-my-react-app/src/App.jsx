import './App.css'
import CounterWithCustomHook from './components/CounterWithCustomHook/CounterWithCustomHook';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom_hook" element={<CounterWithCustomHook />} />
      </Routes>
    </Router>
  )
}

export default App
