import { cn } from '@/lib/utils'
import type { ChatMessageType } from '@/types'

export default function ChatMessage({ role, content }: ChatMessageType) {
  const isUser = role === 'user'

  return (
    <div
      className={cn(
        'max-w-[80%] rounded-lg px-3 py-2 text-sm',
        isUser ? 'bg-primary ml-auto text-white' : 'bg-gray-100 text-gray-800'
      )}
    >
      {content}
    </div>
  )
}
