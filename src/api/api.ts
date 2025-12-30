import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.ozcodingschool.site/api/v1/qna',
  headers: {
    'Content-Type': 'application/json',
  },
})
