import { useQuery } from '@tanstack/react-query'
import { getQuestions } from '@/api/questions.api'
import { mapQuestion } from '@/utils/mapQuestion'

const PAGE_SIZE = 10

export function useQuestions(page: number) {
  const query = useQuery({
    queryKey: ['questions', page],
    queryFn: () => getQuestions({ page }),
  })

  return {
    questions: query.data ? query.data.results.map(mapQuestion) : [],
    totalPages: query.data ? Math.ceil(query.data.count / PAGE_SIZE) : 0,
    isLoading: query.isLoading,
    isError: query.isError,
  }
}
