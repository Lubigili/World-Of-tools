import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface DashboardProps {
  activeTool: string
  setActiveTool: (tool: string) => void
}

const Dashboard: React.FC<DashboardProps> = ({ activeTool, setActiveTool }) => {
  const tools = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: '📊',
      description: 'Central command center for all AI tools',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'agent',
      name: 'Navigator Agent',
      icon: '🤖',
      description: 'Autonomous workflow orchestration',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'research',
      name: 'Deep Research',
      icon: '🔍',
      description: 'Multi-source analysis and synthesis',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'code',
      name: 'Code Assistant',
      icon: '💻',
      description: 'AI-powered coding and debugging',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'summarize',
      name: 'Summarizer',
      icon: '📝',
      description: 'Intelligent document condensation',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'website',
      name: 'Website Generator',
      icon: '🌐',
      description: 'Complete web page creation',
      color: 'from-cyan-500 to-blue-600'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <motion.h1 
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Autonomous Utility Platform
        </motion.h1>
        <motion.p 
          className="text-xl text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Next-generation AI-powered tools for content, coding, and research - all orchestrated by our autonomous Navigator Agent
        </motion.p>
      </div>

      <div className="bento-grid">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            className={`bento-item cursor-pointer transform transition-all duration-300 ${
              activeTool === tool.id ? 'ring-2 ring-white scale-105' : ''
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => setActiveTool(tool.id)}
          >
            <div className={`bg-gradient-to-br ${tool.color} rounded-lg p-4 mb-4`}>
              <div className="text-4xl mb-2">{tool.icon}</div>
              <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
            </div>
            <p className="text-white/70 text-sm">{tool.description}</p>
            <div className="mt-4 flex items-center text-white/50 text-xs">
              <span className="mr-2">Click to activate</span>
              <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-morphism rounded-xl p-6 mt-8">
        <h3 className="text-xl font-semibold text-white mb-4">Agent Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-green-400 text-2xl mb-2">✓</div>
            <div className="text-white font-medium">Navigator Agent</div>
            <div className="text-white/60 text-sm">Active and ready</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-blue-400 text-2xl mb-2">🔧</div>
            <div className="text-white font-medium">Tools Loaded</div>
            <div className="text-white/60 text-sm">6 specialized agents</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-purple-400 text-2xl mb-2">⚡</div>
            <div className="text-white font-medium">Performance</div>
            <div className="text-white/60 text-sm">Optimized for speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
