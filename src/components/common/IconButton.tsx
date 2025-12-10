import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number // width/height px
}

export function IconButton({
  size = 32,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      style={{ width: size, height: size }}
      className={cn(
        'text-foreground hover:bg-muted focus-visible:ring-ring focus-visible:ring-offset-background inline-flex items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
