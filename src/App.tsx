// React lib
import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Team from './components/Team'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/team' replace/>}></Route>

      <Route path='/team' element={<Home />}></Route>
      <Route path='/team/:teamName' element={<Team />}></Route>   
    </Routes>
  )
}

export default App
