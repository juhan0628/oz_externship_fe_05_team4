import axios from 'axios'
import type { QuestionCreate, QuestionCreateResponse } from '@/types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export const QuestionCreateApi = async (
  payload: QuestionCreate,
  token: string
): Promise<QuestionCreateResponse> => {
  const res = await api.post<QuestionCreateResponse>(
    '/api/v1/qna/questions',
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return res.data
}
