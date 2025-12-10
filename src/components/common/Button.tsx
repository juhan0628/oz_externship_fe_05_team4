import { Button as ShadcnButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  fullWidth?: boolean
}

export default function Button({
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton {...props} className={cn(fullWidth && 'w-full', className)} />
  )
}
