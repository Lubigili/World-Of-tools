import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Brain, Code, FileText, Globe, Search, Sparkles } from 'lucide-react'

function App() {
  const [activeTool, setActiveTool] = useState('research')
  const [userInput, setUserInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState(null)

  const tools = [
    {
      id: 'research',
      name: 'Deep Research',
      description: 'Analyze and synthesize hundreds of online sources',
      icon: Search,
      color: 'text-blue-600'
    },
    {
      id: 'summarize',
      name: 'Content Summarizer',
      description: 'Condense articles, reports, and documents instantly',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      id: 'code',
      name: 'Code Assistant',
      description: 'Generate, transform, and troubleshoot code',
      icon: Code,
      color: 'text-purple-600'
    },
    {
      id: 'website',
      name: 'Website Generator',
      description: 'Create complete web pages with HTML, CSS, and JS',
      icon: Globe,
      color: 'text-orange-600'
    }
  ]

  const handleProcess = async () => {
    if (!userInput.trim()) return
    
    setIsProcessing(true)
    
    // Simulate AI processing
    setTimeout(() => {
      setResults({
        summary: `Based on your request "${userInput}", I've processed this through the ${tools.find(t => t.id === activeTool).name} tool.`,
        insights: [
          'Key insight 1: Analysis shows significant opportunities',
          'Key insight 2: Market trends indicate growth potential',
          'Key insight 3: Competitive landscape analysis complete'
        ],
        nextSteps: [
          'Step 1: Review the generated content',
          'Step 2: Customize based on your needs',
          'Step 3: Export or integrate into your workflow'
        ]
      })
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Autonomous Utility Platform
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Next-level AI-powered efficiency tools for content, coding, and deep research
          </p>
        </div>

        {/* Bento Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tools.map((tool) => (
            <Card 
              key={tool.id} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                activeTool === tool.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveTool(tool.id)}
            >
              <CardHeader className="text-center">
                <tool.icon className={`h-8 w-8 mx-auto ${tool.color}`} />
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Main Processing Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                {tools.find(t => t.id === activeTool).name}
              </CardTitle>
              <CardDescription>
                Enter your request below and let our AI agent process it
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="user-input">Your Request</Label>
                <Textarea
                  id="user-input"
                  placeholder="Describe what you need..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  rows={4}
                />
              </div>
              <Button 
                onClick={handleProcess} 
                disabled={isProcessing || !userInput.trim()}
                className="w-full"
              >
                {isProcessing ? 'Processing...' : 'Generate Results'}
              </Button>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>
                {results ? 'Processing complete' : 'Results will appear here'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Summary</h4>
                    <p className="text-sm text-muted-foreground">{results.summary}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Insights</h4>
                    <ul className="text-sm space-y-1">
                      {results.insights.map((insight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Next Steps</h4>
                    <ul className="text-sm space-y-1">
                      {results.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary">{index + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-32 text-muted-foreground">
                  <div className="text-center">
                    <Brain className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Awaiting your input...</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Agent Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              Navigator Agent Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm">
              <span className="font-medium">Current Tool:</span>
              <span className="text-primary">{tools.find(t => t.id === activeTool).name}</span>
              <span className="font-medium ml-4">Status:</span>
              <span>{isProcessing ? 'Processing...' : 'Idle'}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
