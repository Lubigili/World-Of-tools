import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Dashboard } from '@/pages/dashboard'
import { Research } from '@/pages/research'
import { CodeAssistant } from '@/pages/code-assistant'
import { ContentTools } from '@/pages/content-tools'
import { Settings } from '@/pages/settings'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      <Router>
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/research" element={<Research />} />
              <Route path="/code" element={<CodeAssistant />} />
              <Route path="/content" element={<ContentTools />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
