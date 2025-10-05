import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface ResearchResult {
  id: string
  title: string
  url: string
  summary: string
  relevance: number
  source: string
}

const ResearchTool: React.FC = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ResearchResult[]>([])
  const [isResearching, setIsResearching] = useState(false)
  const [searchMethod, setSearchMethod] = useState('web')

  const conductResearch = async () => {
    if (!query.trim()) return

    setIsResearching(true)
    
    // Simulate research process
    setTimeout(() => {
      const mockResults: ResearchResult[] = [
        {
          id: '1',
          title: 'Latest AI Research Trends 2025',
          url: 'https://example.com/ai-trends-2025',
          summary: 'Comprehensive analysis of emerging AI technologies including transformer architectures, multimodal systems, and autonomous agent frameworks.',
          relevance: 95,
          source: 'AI Research Journal'
        },
        {
          id: '2',
          title: 'Autonomous Systems in Modern Applications',
          url: 'https://example.com/autonomous-systems',
          summary: 'Study on autonomous systems implementation across various industries, focusing on reliability and ethical considerations.',
          relevance: 88,
          source: 'Tech Review'
        },
        {
          id: '3',
          title: 'Cost Optimization for AI Platforms',
          url: 'https://example.com/ai-cost-optimization',
          summary: 'Best practices for reducing AI inference costs through model optimization, quantization, and efficient deployment strategies.',
          relevance: 82,
          source: 'Cloud Computing Today'
        }
      ]

      setResults(mockResults)
      setIsResearching(false)
    }, 3000)
  }

  const generateSummary = () => {
    if (results.length === 0) return

    const summary = results
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 3)
      .map(result => `• ${result.title}: ${result.summary}`)
      .join('\n\n')

    alert(`Research Summary:\n\n${summary}`)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Deep Research Tool</h1>
        <p className="text-white/70">Multi-source analysis and intelligent synthesis</p>
      </div>

      <div className="glass-morphism rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Research Query
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your research topic or question..."
              className="w-full bg-white/10 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Search Method
            </label>
            <select
              value={searchMethod}
              onChange={(e) => setSearchMethod(e.target.value)}
              className="w-full bg-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <option value="web">Web Search</option>
              <option value="academic">Academic Papers</option>
              <option value="news">News Sources</option>
              <option value="social">Social Media</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={conductResearch}
            disabled={isResearching || !query.trim()}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-700 disabled:opacity-50 transition-all"
          >
            {isResearching ? 'Researching...' : 'Start Research'}
          </button>
          <button
            onClick={generateSummary}
            disabled={results.length === 0}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-700 disabled:opacity-50 transition-all"
          >
            Generate Summary
          </button>
        </div>
      </div>

      {isResearching && (
        <div className="glass-morphism rounded-xl p-6">
          <div className="flex items-center space-x-4">
            <div className="loading-spinner"></div>
            <div className="text-white">
              <div className="font-medium">Agent is conducting research...</div>
              <div className="text-white/60 text-sm">Analyzing multiple sources and extracting key insights</div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full animate-pulse" style={{ width: '25%' }}></div>
            </div>
            <div className="text-white/60 text-xs">Searching sources...</div>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Research Results</h2>
          {results.map((result) => (
            <motion.div
              key={result.id}
              className="glass-morphism rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{result.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-white/60">
                    <span>Source: {result.source}</span>
                    <span>Relevance: {result.relevance}%</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">
                    {result.relevance >= 90 ? 'High' : result.relevance >= 70 ? 'Medium' : 'Low'}
                  </span>
                </div>
              </div>
              <p className="text-white/80 mb-4">{result.summary}</p>
              <div className="flex justify-between items-center">
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  View Source →
                </a>
                <div className="flex space-x-2">
                  <button className="text-white/60 hover:text-white text-sm">
                    Save
                  </button>
                  <button className="text-white/60 hover:text-white text-sm">
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ResearchTool
