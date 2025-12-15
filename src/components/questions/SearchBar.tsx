import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="flex w-full items-center gap-2 rounded-full border border-[var(--color-gray-200)] px-4 py-2">
      <Search size={18} className="text-[var(--color-gray-500)]" />
      <input
        placeholder="질문 검색"
        className="flex-1 text-[var(--color-gray-primary)] outline-none"
      />
    </div>
  )
}
