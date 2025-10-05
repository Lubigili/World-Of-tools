import { useState, useEffect } from 'react'
import { Brain, Code, FileText, TrendingUp, Clock, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const quickActions = [
  {
    title: "Deep Research",
    description: "Analyze hundreds of sources",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    action: "research"
  },
  {
    title: "Code Generation",
    description: "Write and debug code",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    action: "code"
  },
  {
    title: "Content Summarization",
    description: "Condense documents instantly",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    action: "content"
  }
]

const recentActivity =
