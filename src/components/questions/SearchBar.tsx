import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="relative flex-1">
      <Search
        className="absolute top-1/2 left-4 -translate-y-1/2 text-[var(--color-gray-400)]"
        size={16}
      />

      <input
        type="text"
        placeholder="질문 검색"
        className="h-10 w-full rounded-full border border-[var(--color-gray-200)] bg-[var(--color-gray-100)] pr-4 pl-10 text-sm outline-none focus:border-[var(--color-primary)]"
      />
    </div>
  )
}
