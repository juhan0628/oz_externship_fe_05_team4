import type { SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        className={cn(
          'w-full appearance-none rounded-[8px] border border-[#ECECEC] bg-white px-4 py-3 text-sm text-[#5C5B5E]',
          'focus:border-[#9747FF] focus:ring-2 focus:ring-[#9747FF33] focus:outline-none',
          'pr-10', // 오른쪽 아이콘 여백
          className
        )}
        {...props}
      >
        {children}
      </select>

      {/* ▼ 아이콘 */}
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs text-[#A1A1A1]">
        ▼
      </span>
    </div>
  )
}
