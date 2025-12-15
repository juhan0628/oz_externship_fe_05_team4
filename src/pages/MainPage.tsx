import SearchBar from '@/components/questions/SearchBar'
import { Search } from 'lucide-react'
import { Link } from 'react-router'

export default function MainPage() {
  return (
    <main className="mx-auto w-full max-w-[960px] px-6 py-8">
      <h1 className="mb-6 text-2xl font-bold text-[var(--color-gray-primary)]">
        질문응답
      </h1>

      <h1 className="mb-6 text-2xl font-bold text-[#121212]">질문응답</h1>

      <section className="mb-6 flex items-center justify-between gap-4">
        <SearchBar />
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[var(--color-gray-400)]" />

          <input
            type="text"
            placeholder="질문 검색"
            className="h-10 w-full rounded-full border border-[var(--color-gray-200)] bg-[var(--color-gray-100)] px-10 text-sm outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        <Link to="/Question/Create">
          <button className="h-10 rounded-full bg-[var(--color-primary)] px-5 text-sm font-semibold text-white hover:bg-[var(--color-primary-400)]">
            질문 등록하기
          </button>
        </Link>
      </section>
    </main>
  )
}
