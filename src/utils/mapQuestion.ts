import type { QnaQuestion, Question } from '@/types'

export function mapQuestion(q: QnaQuestion): Question {
  return {
    id: q.id,
    categories: q.category.names,
    title: q.title,
    preview: q.content_preview,
    answers: q.answer_count,
    views: q.view_count,
    time: q.created_at,
    isAnswered: q.answer_count > 0,
    author: {
      name: q.author.nickname,
      profile: q.author.profile_image_url,
    },
  }
}
