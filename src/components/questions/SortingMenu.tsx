import { useState } from 'react'

export default function SortMenu() {
  const [sort, setSort] = useState<'latest' | 'oldest'>('latest')

  return (
    <div className="flex items-center justify-end gap-4 text-sm">
      <button
        onClick={() => setSort(sort === 'latest' ? 'oldest' : 'latest')}
        className="text-[var(--color-gray-500)] hover:text-[var(--color-gray-primary)]"
      >
        {sort === 'latest' ? '최신순 ▾' : '오래된 순 ▾'}
      </button>

      <button className="flex items-center gap-1 text-[var(--color-gray-500)] hover:text-[var(--color-gray-primary)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth="2" d="M3 4h18M3 12h18M3 20h18" />
        </svg>
        필터
      </button>
    </div>
  )
}
