import { api } from '@/lib/index'

export async function fetchQuestions(query: string) {
  const res = await api.get(`/qna/questions?${query}`)
  return res.data
}
