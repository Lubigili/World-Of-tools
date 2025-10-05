export interface AgentRequest {
  message: string
  tool: 'research' | 'summarize' | 'code' | 'website'
  context?: string
}

export interface AgentResponse {
  success: boolean
  result?: any
  error?: string
  details?: any[]
}

export interface ToolRequest {
  tool: string
  data
