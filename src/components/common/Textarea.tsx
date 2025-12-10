import { Textarea as ShadTextarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

export default function Textarea({
  className,
  ...props
}: React.ComponentProps<typeof ShadTextarea>) {
  return <ShadTextarea className={cn(className)} {...props} />
}
