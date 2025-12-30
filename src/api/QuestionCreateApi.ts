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
  const res = await api.post(
    '/questions',
    {
      title: payload.title,
      content: payload.content,
      category: payload.category,
      image_urls: payload.imageUrls,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return {
    message: res.data.message,
    questionId: res.data.question_id,
  }
}
