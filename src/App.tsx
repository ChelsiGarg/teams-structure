// React lib
import {Routes, Route, Navigate} from 'react-router-dom'

// React Components
import Home from './components/Home'
import Team from './components/Team'
import NotFound from './components/NotFound'

// Styling
import './App.css'
import MainLayout from './components/MainLayout'
import Overview from './components/Overview'


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element = { <Navigate to="team" replace /> } />
        <Route path="team" element = {<Home />} />
        <Route path="team/:teamId" element = {<Team />} >
          <Route index element = {<Overview />} />
          <Route path="overview" element = {<Overview />} />
        </Route>  
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
