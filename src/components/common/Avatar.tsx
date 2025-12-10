import { cn } from '@/lib/utils'

export interface AvatarProps {
  src?: string
  alt?: string
  fallbackText?: string // 없으면 "avatar"
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClass = {
  sm: 'w-6 h-6 text-[10px]',
  md: 'w-8 h-8 text-xs',
  lg: 'w-10 h-10 text-sm',
}

export function Avatar({
  src,
  alt,
  fallbackText = 'avatar',
  size = 'md',
  className,
}: AvatarProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center overflow-hidden rounded-full bg-[#F6F6F6] text-[#5C5B5E]',
        sizeClass[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span className="truncate">{fallbackText.charAt(0).toUpperCase()}</span>
      )}
    </div>
  )
}
