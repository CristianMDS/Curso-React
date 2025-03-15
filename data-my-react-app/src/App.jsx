import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import StaticComponent from './components/StaticComponent/StaticComponent'
import UserList from './components/UserList/UserList'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'
import SearchPosts from './components/SearchPosts/SearchPosts'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/static_component' element={<StaticComponent/>} />
        <Route path='/dinamic_component' element={<UserList />} />
        <Route path='/try_component' element={<UserListWithLoading />} />
        <Route path='/search_component' element={<SearchPosts />} />
      </Routes>
    </Router>
  )
}

export default App
