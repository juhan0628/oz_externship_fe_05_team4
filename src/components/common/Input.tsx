import { Input as ShadInput } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function Input({
  className,
  ...props
}: React.ComponentProps<typeof ShadInput>) {
  return <ShadInput className={cn(className)} {...props} />
}
