import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2, CheckCircle, AlertCircle, Bot } from 'lucide-react'

interface AgentStep {
  id: string
  name: string
  status: 'pending' | 'running' | 'completed' | 'error'
  description: string
  duration?: number
}

interface AgentVisualizationProps {
  steps: AgentStep[]
  isRunning: boolean
  onReset?: () => void
}

export function AgentVisualization({ steps, isRunning, onReset }: AgentVisualizationProps) {
