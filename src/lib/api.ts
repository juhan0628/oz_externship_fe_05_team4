import axios from 'axios'
import { token } from '@/lib/index'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // refresh token 쿠키용
})

api.interceptors.request.use((config) => {
  const accessToken = token.get()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})
