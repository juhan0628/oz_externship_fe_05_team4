import { api } from '@/lib/index'
import type { QnaListResponse } from '@/types'

interface GetQuestionsParams {
  page?: number
}

export const getQuestions = async (
  params: GetQuestionsParams = {}
): Promise<QnaListResponse> => {
  const { page = 1 } = params

  const { data } = await api.get<QnaListResponse>('/qna/questions', {
    params: { page },
  })

  return data
}
