import { useState } from 'react'
import { Send } from 'lucide-react'

interface Props {
  onSend: (message: string) => void
}

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState('')

  return (
    <div className="flex items-center gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="더 궁금한 것이 있다면 이어서 질문해 보세요."
        className="flex-1 rounded-md border px-3 py-2 text-sm"
      />
      <button
        onClick={() => {
          if (!value.trim()) return
          onSend(value)
          setValue('')
        }}
        className="text-primary"
      >
        <Send size={18} />
      </button>
    </div>
  )
}
