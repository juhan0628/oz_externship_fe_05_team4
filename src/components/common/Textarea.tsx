import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'min-h-[160px] w-full rounded-[8px] border border-[#ECECEC] bg-white px-4 py-3 text-sm text-[#5C5B5E]',
        'resize-none',
        'placeholder:text-[#A1A1A1]',
        'focus:border-[#9747FF] focus:ring-2 focus:ring-[#9747FF33] focus:outline-none',
        className
      )}
      {...props}
    />
  )
}
