// React lib
import {Routes, Route, Navigate} from 'react-router-dom'

// React Components
import Home from './components/Home'
import Team from './components/Team'

// Styling
import './App.css'
import MainLayout from './components/MainLayout'


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element = { <Navigate to="team" replace /> } />
        <Route path="team" element={<Home />}></Route>
        <Route path="team/:teamName" element={<Team />}></Route>   
      </Route>
    </Routes>
  )
}

export default App
