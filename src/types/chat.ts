export type ChatRole = 'user' | 'assistant'

export interface ChatMessageType {
  id: number
  role: ChatRole
  content: string
}
