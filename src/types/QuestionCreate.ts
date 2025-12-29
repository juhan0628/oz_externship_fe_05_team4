export interface QuestionCreate {
  title: string
  content: string
  category: number
  image_urls: string[]
}

export interface QuestionCreateResponse {
  message: string
  question_id: number
}

export interface QuestionCreateErrorResponse {
  400: { error_detail: string }
  401: { error_detail: string }
  403: { error_detail: string }
}
