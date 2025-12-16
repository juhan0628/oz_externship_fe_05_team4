import { Search, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router'
import { useState } from 'react'

import SortMenu from '@/components/questions/SortingMenu'
import QuestionCard from '@/components/questions/QuestionCard'

export default function MainPage() {
  const [sort, setSort] = useState<'latest' | 'oldest'>('latest')

  // 임시 데이터
  const questions = [
    {
      id: 1,
      categories: ['프론트엔드', '프로그래밍 언어', 'Python'],
      title: '오류가 발생했다고 뜨네요.',
      preview:
        '실행 결과오류가 발생했어요. AI 코드리뷰로 왜 오류가 발생했는지 확인해 보세요...',
      answers: 2,
      views: 60,
      time: '1시간 전',
      thumbnail: null,
      author: {
        name: '김태산',
        profile: 'https://cdn.ozcodingschool.com/profiles/user_123.png',
      },
    },
    {
      id: 2,
      categories: ['프론트엔드', '프로그래밍 언어', 'Python'],
      title: 'now 함수를 써야 하는 상황 예시에 대해서',
      preview:
        '각 row마다 시간 계산 처리를 다르게 해야 하는 경우라면 now 함수를 쓰는 게 좋을 것 같습니다...',
      answers: 1,
      views: 60,
      time: '1시간 전',
      thumbnail: 'https://via.placeholder.com/200x120',
      author: {
        name: 'jnubugo',
        profile: 'https://cdn.ozcodingschool.com/profiles/user_456.png',
      },
    },
  ]

  return (
    <main className="mx-auto w-full max-w-[960px] px-6 py-8">
      <h1 className="mb-6 text-2xl font-bold text-[var(--color-gray-primary)]">
        질의응답
      </h1>

      <section className="mb-6 flex items-center justify-between gap-4">
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

      <section className="mb-4 flex items-center gap-6 text-sm">
        <button className="border-b-2 border-[var(--color-primary)] pb-1 font-semibold text-[var(--color-primary)]">
          전체보기
        </button>
        <button className="pb-1 text-[var(--color-gray-500)]">답변완료</button>
        <button className="pb-1 text-[var(--color-gray-500)]">
          답변 대기중
        </button>
      </section>

      <section className="mb-4 flex items-center justify-end gap-6 text-sm">
        <SortMenu sort={sort} onChange={setSort} />
        <button className="flex items-center gap-1 text-sm text-[var(--color-gray-600)] hover:text-[var(--color-gray-primary)]">
          <SlidersHorizontal className="h-4 w-4" />
          필터
        </button>
      </section>

      <section className="mt-6 space-y-10">
        {questions.map((q) => (
          <Link key={q.id} to={`/Question/Detail/${q.id}`}>
            <QuestionCard {...q} />
          </Link>
        ))}
      </section>
    </main>
  )
}
