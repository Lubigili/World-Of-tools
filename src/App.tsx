import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import DashboardPage from './pages/DashboardPage'
import ResearchTool from './pages/tools/ResearchTool'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tools/research" element={<ResearchTool />} />
        <Route path="/tools/summarize" element={<DashboardPage />} />
        <Route path="/tools/code" element={<DashboardPage />} />
        <Route path="/tools/website" element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
