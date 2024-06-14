import './assets/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { ConstructionProcess } from './pages/ConstructionProcess'
import { WhyUs } from './pages/WhyUs'
import { Project } from './pages/Project'
import { NotFound } from "./pages/NotFound";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ConstructionProcess" element={<ConstructionProcess />} />
        <Route path="/WhyUs" element={<WhyUs />} />
        <Route path="/Project" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
