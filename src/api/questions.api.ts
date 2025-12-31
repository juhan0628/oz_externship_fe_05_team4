import { api } from './api'
import type { QnaListResponse } from '@/types'

interface GetQuestionsParams {
  page?: number
}

export const getQuestions = async (
  params: GetQuestionsParams = {}
): Promise<QnaListResponse> => {
  const { page = 1 } = params

  const { data } = await api.get<QnaListResponse>('/questions', {
    params: { page },
  })

  return data
}
