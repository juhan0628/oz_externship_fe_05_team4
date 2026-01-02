import type { User } from '@/types/user'
import { create } from 'zustand'

interface AuthState {
  status: 'idle' | 'authenticated' | 'unauthenticated'
  user: User | null

  setAuthenticated: (user: User) => void
  setUnauthenticated: () => void

  isAuthenticated: () => boolean
  isUnauthenticated: () => boolean
  isIdle: () => boolean
}

export const useAuthStore = create<AuthState>((set, get) => ({
  status: 'idle',
  user: null,

  setAuthenticated: (user) =>
    set({
      status: 'authenticated',
      user,
    }),

  setUnauthenticated: () =>
    set({
      status: 'unauthenticated',
      user: null,
    }),

  isAuthenticated: () => get().status === 'authenticated',

  isUnauthenticated: () => get().status === 'unauthenticated',

  isIdle: () => get().status === 'idle',
}))
