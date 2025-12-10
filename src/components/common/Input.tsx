import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full rounded-[8px] border border-[#ECECEC] bg-white px-4 py-3 text-sm text-[#5C5B5E]',
        'placeholder:text-[#A1A1A1]',
        'focus:border-[#9747FF] focus:ring-2 focus:ring-[#9747FF33] focus:outline-none'
      )}
      {...props}
    />
  )
}
