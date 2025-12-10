import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'default' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

const variantClass: Record<ButtonVariant, string> = {
  // Figma – Primary /Primary-Default
  primary:
    'bg-[#9747FF] text-white hover:bg-[#7C2DFF] disabled:bg-[#E4D4FF] disabled:text-[#A1A1A1] disabled:cursor-not-allowed',

  // 회색 기본 버튼 (필요 없으면 안 써도 됨)
  default:
    'bg-[#F6F6F6] text-[#5C5B5E] hover:bg-[#ECECEC] border border-[#ECECEC]',

  // Figma – Outline 버튼
  outline: 'bg-white text-[#5C5B5E] border border-[#A1A1A1] hover:bg-[#F3E8FF]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-[8px] font-medium transition-colors select-none',
        'focus-visible:ring-2 focus-visible:ring-[#9747FF80] focus-visible:ring-offset-0 focus-visible:outline-none',
        sizeClass[size],
        variantClass[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    />
  )
}
