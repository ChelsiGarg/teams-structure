// React lib
import {Routes, Route, Navigate} from 'react-router-dom'

// React Components
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import Members from './components/Members'
import NotFound from './components/NotFound'
import Overview from './components/Overview'
import Projects from './components/Projects'
import Responsibilities from './components/Responsibilities'
import Team from './components/Team'
import TechStack from './components/TechStack'

// Styling
import './App.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element = { <Navigate to="team" replace /> } />
        <Route path="team" element = {<Home />} />
        <Route path="team/:teamId" element = {<Team />} >
          <Route index element = {<Overview />} />
          <Route path="overview" element = {<Overview />} />
          <Route path="members" element = {<Members />} />
          <Route path="techStack" element = {<TechStack />} />
          <Route path="projects" element = {<Projects />} />
          <Route path="responsibilities" element = {<Responsibilities />} />
        </Route>  
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
