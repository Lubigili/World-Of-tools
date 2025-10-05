// Theme management
const themeToggle = document.getElementById('theme-toggle')
const html = document.documentElement

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light'
html.classList.toggle('dark', currentTheme === 'dark')

themeToggle?.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
  updateThemeIcon(isDark)
})

function updateThemeIcon(isDark: boolean) {
  const icon = themeToggle?.querySelector('i')
  if (icon) {
    icon.className = isDark ? 'fas fa-sun text-gray-300' : 'fas fa-moon text-gray-600'
  }
}

// Tool selection
const toolCards = document.querySelectorAll('.tool-card')
const agentInterface = document.getElementById('agent-interface')
const userInput = document.getElementById('user-input')
const submitBtn = document.getElementById('submit-btn')
const agentThinking = document.getElementById('agent-thinking')
const toolUsage = document.getElementById('tool-usage')
const toolName = document.getElementById('tool-name')
const toolProgress = document.getElementById('tool-progress')
const agentOutput = document.getElementById('agent-output')

let selectedTool: string | null = null

toolCards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove active state from all cards
    toolCards.forEach(c => c.classList.remove('ring-2', 'ring-blue-500'))
    
    // Add active state to selected card
    card.classList.add('ring-2', 'ring-blue-500')
    
    selectedTool = card.dataset.tool || null
    agentInterface?.classList.remove('hidden')
    
    // Focus on input
    userInput?.focus()
  })
})

// Form submission
submitBtn?.addEventListener('click', handleSubmit)
userInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSubmit()
  }
})

async function handleSubmit() {
  const message = userInput?.value.trim()
  if (!message || !selectedTool) return

  // Disable input and show loading state
  userInput.disabled = true
  submitBtn.disabled = true
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...'

  // Clear previous output
  agentOutput.innerHTML = ''

  // Show agent thinking
  agentThinking?.classList.remove('hidden')
  toolUsage?.classList.add('hidden')

  try {
    // Simulate agent processing
    await simulateAgentProcessing(selectedTool, message)
    
    // Show tool usage
    agentThinking?.classList.add('hidden')
    toolUsage?.classList.remove('hidden')
    toolName.textContent = getToolDisplayName(selectedTool)
    
    // Simulate progress
    for (let i = 0; i <= 100; i += 10) {
      toolProgress.style.width = `${i}%`
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    // Generate and display results
    const results = await generateToolResults(selectedTool, message)
    displayResults(results)
    
  } catch (error) {
    console.error('Error:', error)
    agentOutput.innerHTML = `
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <div class="flex items-center">
          <i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>
          <span class="text-red-700 dark:text-red-300">An error occurred while processing your request.</span>
        </div>
        <p class="text-sm text-red-600 dark:text-red-400 mt-2">Please try again or contact support if the problem persists.</p>
      </div>
    `
  } finally {
    // Reset UI
    userInput.disabled = false
    submitBtn.disabled = false
    submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Send'
    userInput.value = ''
    agentThinking?.classList.add('hidden')
  }
}

function simulateAgentProcessing(tool: string, message: string): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 2000 + Math.random() * 2000) // 2-4 seconds
  })
}

function getToolDisplayName(tool: string): string {
  const names: Record<string, string> = {
    research: 'Deep Research Tool',
    summarize: 'Content Summarizer',
    code: 'Code Assistant',
    website: 'Website Generator'
  }
  return names[tool] || tool
}

async function generateToolResults(tool: string, message: string): Promise<any> {
  // This would normally call the backend API
  // For now, we'll simulate results based on the tool type
  
  switch (tool) {
    case 'research':
      return simulateResearchResults(message)
    case 'summarize':
      return simulateSummarizeResults(message)
    case 'code':
      return simulateCodeResults(message)
    case 'website':
      return simulateWebsiteResults(message)
    default:
      return { content: 'Tool not recognized' }
  }
}

function simulateResearchResults(query: string): any {
  return {
    title: `Research Report: ${query}`,
    summary: `Comprehensive analysis of ${query} based on multiple sources.`,
    keyFindings: [
      'Market trends show significant growth in this area',
      'Competitive landscape is becoming increasingly crowded',
      'User adoption rates are accelerating rapidly',
      'Regulatory environment is evolving positively'
    ],
    sources: [
      { name: 'Industry Report 2024', url: '#' },
      { name: 'Market Analysis Study', url: '#' },
      { name: 'Competitive Intelligence', url: '#' }
    ],
    recommendations: [
      'Focus on emerging market opportunities',
      'Invest in technology infrastructure',
      'Develop strategic partnerships',
      'Monitor regulatory changes closely'
    ]
  }
}

function simulateSummarizeResults(content: string): any {
  return {
    originalLength: content.length,
    summary: content.substring(0, 200) + '...',
    bulletPoints: [
      'Key point one identified from the content',
      'Important insight discovered in analysis',
      'Critical information extracted successfully',
      'Essential details preserved in summary'
    ],
    wordCount: Math.floor(content.length / 5),
    readingTime: Math.ceil(content.length / 200) + ' minutes'
  }
}

function simulateCodeResults(query: string): any {
  const language = query.toLowerCase().includes('python') ? 'python' : 'javascript'
  
  return {
    language,
    code: `function ${query.replace(/\s+/g, '_')}() {
  // Implementation for ${query}
  console.log('Processing ${query}');
  return result;
}`,
    explanation: `This function handles ${query} with proper error handling and optimization.`,
    suggestions: [
      'Add input validation',
      'Implement error handling',
      'Consider performance optimizations',
      'Add documentation comments'
    ]
  }
}

function simulateWebsiteResults(query: string): any {
  return {
    title: `${query} Website`,
    pages: [
      { name: 'Home', description: 'Main landing page with hero section' },
      { name: 'About', description: 'Company information and mission' },
      { name: 'Services', description: 'Detailed service offerings' },
      { name: 'Contact', description: 'Contact form and information' }
    ],
    features: [
      'Responsive design for all devices',
      'Modern UI with smooth animations',
      'SEO optimized structure',
      'Fast loading performance'
    ],
    estimatedTime: '2-3 days'
  }
}

function displayResults(results: any) {
  let html = ''
  
  if (results.title) {
    html += `<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">${results.title}</h3>`
  }
  
  if (results.summary) {
    html += `<div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
      <p class="text-gray-700 dark:text-gray-300">${results.summary}</p>
    </div>`
  }
  
  if (results.keyFindings) {
    html += `<div class="mb-6">
      <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Key Findings</h4>
      <ul class="space-y-2">`
    results.keyFindings.forEach((finding: string) => {
      html += `<li class="flex items-start">
        <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
        <span class="text-gray-700 dark:text-gray-300">${finding}</span>
      </li>`
    })
    html += `</ul></div>`
  }
  
  if (sources) {
    html += `<div class="mb-6">
      <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Sources</h4>
      <ul class="space-y-2">`
    results.sources.forEach((source: any) => {
      html += `<li class="flex items-center">
        <i class="fas fa-external-link-alt text-blue-500 mr-2"></i>
        <a href="${source.url}" class="text-blue-600 dark:text-blue-400 hover:underline">${source.name}</a>
      </li>`
    })
    html += `</ul></div>`
  }
  
  if (results.code) {
    html += `<div class="mb-6">
      <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Generated Code</h4>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <pre class="text-sm text-gray-800 dark:text-gray-200"><code>${results.code}</code></pre>
      </div>
    </div>`
  }
  
  if (results.pages) {
    html += `<div class="mb-6">
      <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Website Structure</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">`
    results.pages.forEach((page: any) => {
      html += `<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h5 class="font-medium text-gray-900 dark:text-white mb-2">${page.name}</h5>
        <p class="text-sm text-gray-600 dark:text-gray-400">${page.description}</p>
      </div>`
    })
    html += `</div></div>`
  }
  
  agentOutput.innerHTML = html
}

// Initialize theme icon
updateThemeIcon(currentTheme === 'dark')
