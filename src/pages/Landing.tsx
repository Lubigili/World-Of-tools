import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, Code, FileText, Globe, Search, Sparkles, Zap, Shield, TrendingUp, Users } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function Landing() {
  const tools = [
    {
      id: 'research',
      name: 'Deep Research',
      description: 'Analyze hundreds of sources instantly',
      icon: Search,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'summarize',
      name: 'Content Summarizer',
      description: 'Condense documents in seconds',
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'code',
      name: 'Code Assistant',
      description: 'Generate and debug code effortlessly',
      icon: Code,
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 'website',
      name: 'Website Generator',
      description: 'Create complete web pages instantly',
      icon: Globe,
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized AI models deliver results in seconds'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with data encryption'
    },
    {
      icon: TrendingUp,
      title: 'Scalable',
      description: 'From personal projects to enterprise workflows'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Work together with your team in real-time'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              AUP
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 mb-6">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Powered by Next-Gen AI
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
              Autonomous Utility
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Transform your workflow with AI-powered tools for research, coding, content creation, and more.
            Built for efficiency, designed for professionals.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6">
                Start Building Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Powerful Tools at Your Fingertips
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
            Everything you need to boost productivity and accelerate your workflow
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, translateY: -5 }}
              >
                <Card className="h-full border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                    <CardDescription className="text-base">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/tools/${tool.id}`}>
                      <Button variant="ghost" className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-950">
                        Explore Tool
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0 text-white">
          <CardHeader className="text-center pb-12">
            <CardTitle className="text-4xl mb-4">Ready to Transform Your Workflow?</CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Join thousands of professionals using AUP to work smarter
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get Started Now - It's Free
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Autonomous Utility Platform. Built with AI excellence.</p>
        </div>
      </footer>
    </div>
  )
}
