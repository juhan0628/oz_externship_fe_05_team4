import { MessageCircle, X } from 'lucide-react'

interface Props {
  open: boolean
  onToggle: () => void
}

export default function ChatbotFloatingButton({ open, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="bg-primary hover:bg-primary-400 fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
      aria-label="chatbot toggle"
    >
      {open ? <X size={24} /> : <MessageCircle size={24} />}
    </button>
  )
}
