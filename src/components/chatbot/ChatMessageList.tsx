import ChatMessage from './ChatMessage'
import type { ChatMessageType } from '@/types'

interface Props {
  messages: ChatMessageType[]
}

export default function ChatMessageList({ messages }: Props) {
  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </div>
  )
}
