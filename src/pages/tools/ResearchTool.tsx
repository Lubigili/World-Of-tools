import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Search, ExternalLink, FileText, Sparkles, Loader2, ArrowLeft } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Textarea } from '../../components/ui/textarea'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

export default function ResearchTool() {
  const [query, setQuery] = useState('')
  const [depth, setDepth] = useState('medium')
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState(null)

  const handleResearch = async () => {
    if (!query.trim()) return

    setIsProcessing(true)

    setTimeout(() => {
      setResults({
        summary: `Comprehensive research on "${query}" has been completed. The analysis covers multiple perspectives and synthesizes information from various authoritative sources.`,
        sources: [
          { title: 'Industry Report 2025', url: '#', relevance: 95 },
          { title: 'Academic Research Paper', url: '#', relevance: 88 },
          { title: 'Market Analysis', url: '#', relevance: 82 },
          { title: 'Expert Opinion Article', url: '#', relevance: 76 },
          { title: 'Statistical Data Source', url: '#', relevance: 71 }
        ],
        keyFindings: [
          'Market shows 45% growth in target segment over past 3 years',
          'Three major trends identified: AI integration, sustainability, and personalization',
          'Competitive landscape reveals 5 key players with distinct positioning',
          'Consumer sentiment analysis indicates high demand for innovation'
        ],
        insights: [
          {
            category: 'Market Opportunity',
            description: 'Strong growth indicators suggest favorable conditions for market entry'
          },
          {
            category: 'Technical Feasibility',
            description: 'Required technologies are mature and readily available'
          },
          {
            category: 'Risk Assessment',
            description: 'Moderate competition, but differentiation opportunities exist'
          }
        ]
      })
      setIsProcessing(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              AUP
            </span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Search className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Deep Research</h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                AI-powered multi-source analysis and synthesis
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Research Query
                </CardTitle>
                <CardDescription>
                  Enter your research topic and let AI analyze hundreds of sources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="query">What would you like to research?</Label>
                  <Textarea
                    id="query"
                    placeholder="E.g., Market analysis for AI-powered productivity tools in 2025"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="depth">Research Depth</Label>
                  <select
                    id="depth"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background"
                  >
                    <option value="quick">Quick (5-10 sources)</option>
                    <option value="medium">Medium (20-50 sources)</option>
                    <option value="deep">Deep (100+ sources)</option>
                  </select>
                </div>

                <Button
                  onClick={handleResearch}
                  disabled={isProcessing || !query.trim()}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Researching...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Start Research
                    </>
                  )}
                </Button>

                {isProcessing && (
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      Analyzing sources...
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Extracting key insights...
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                      Synthesizing findings...
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Results</CardTitle>
                <CardDescription>
                  {results ? 'Analysis complete' : 'Results will appear here'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {results ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Executive Summary
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{results.summary}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Findings</h4>
                      <ul className="space-y-2">
                        {results.keyFindings.map((finding, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span>{finding}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Strategic Insights</h4>
                      <div className="space-y-3">
                        {results.insights.map((insight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg"
                          >
                            <h5 className="font-medium text-sm mb-1">{insight.category}</h5>
                            <p className="text-xs text-slate-600 dark:text-slate-400">{insight.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Sources ({results.sources.length})
                      </h4>
                      <div className="space-y-2">
                        {results.sources.map((source, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center justify-between p-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors"
                          >
                            <span className="text-sm text-blue-600 dark:text-blue-400">{source.title}</span>
                            <span className="text-xs text-slate-500">{source.relevance}%</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Export Report
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-slate-400">
                    <div className="text-center">
                      <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Enter a research query to begin</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
