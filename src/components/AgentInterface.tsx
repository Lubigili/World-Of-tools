import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AgentMessage {
  id: string
  type: 'user' | 'agent' | 'tool'
  content: string
  timestamp: Date
  tool?: string
}

const AgentInterface: React.FC = () => {
  const [messages, setMessages] = useState<AgentMessage[]>([
    {
      id: '1',
      type: 'agent',
      content: 'Hello! I\'m your Navigator Agent. I can help you with research, coding, summarization, and website generation. What would you like to accomplish today?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [activeTool, setActiveTool] = useState<string | null>(null)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: AgentMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsThinking(true)

    // Simulate agent processing
    setTimeout(() => {
      const agentResponse: AgentMessage = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: 'I understand you want to: ' + input + '. Let me analyze this request and determine the best approach.',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, agentResponse])
      setIsThinking(false)

      // Simulate tool selection
      setTimeout(() => {
        const toolMessage: AgentMessage = {
          id: (Date.now() + 2).toString(),
          type: 'tool',
          content: 'Selected tool: Research Agent',
          tool: 'research',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, toolMessage])
        setActiveTool('research')
      }, 1000)
    }, 2000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Navigator Agent</h1>
        <p className="text-white/70">Your autonomous workflow orchestration system</p>
      </div>

      <div className="glass-morphism rounded-xl p-6 h-96 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={`max-w-xs lg:max-w-md rounded-lg p-4 ${
              message.type === 'user' 
                ? 'bg-blue-500 text-white' 
                : message.type === 'agent'
                ? 'bg-white/20 text-white'
                : 'bg-green-500/20 text-green-300 border border-green-500/30'
            }`}>
              {message.type === 'tool' && (
                <div className="text-xs font-semibold mb-1 uppercase tracking-wide">
                  {message.tool} • {formatTime(message.timestamp)}
                </div>
              )}
              <div className="text-sm">{message.content}</div>
            </div>
          </motion.div>
        ))}
        
        {isThinking && (
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white/20 text-white rounded-lg p-4 agent-thinking">
              <div className="flex items-center space-x-2">
                <div className="loading-spinner"></div>
                <span className="text-sm">Agent is thinking...</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="glass-morphism rounded-xl p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe what you want to accomplish..."
            className="flex-1 bg-white/10 text-white placeholder-white/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            onClick={handleSend}
            disabled={isThinking}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 transition-all"
          >
            Send
          </button>
        </div>
      </div>

      {activeTool && (
        <div className="glass-morphism rounded-xl p-4 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Active Tool: {activeTool}</span>
            </div>
            <button
              onClick={() => setActiveTool(null)}
              className="text-white/60 hover:text-white text-sm"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AgentInterface
