import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Counter from './components/Count';
import UserForm from './components/UserForm';
import ShoppingCar from './components/ShoppingCar';
import CounterWithEffect from './components/CounterWithEffect';
import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Count" element={<Counter />}/>
        <Route path="/UserForm" element={<UserForm />}/>
        <Route path="/ShoppingCar" element={<ShoppingCar />}/>
        <Route path="/CounterWithEffect" element={<CounterWithEffect />}/>
      </Routes>
    </Router>
  )
}

export default App
