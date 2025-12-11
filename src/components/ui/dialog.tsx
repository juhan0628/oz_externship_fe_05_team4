import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close

const DialogOverlay = ({
  className,
  ...props
}: DialogPrimitive.DialogOverlayProps) => (
  <DialogPrimitive.Overlay
    className={cn('fixed inset-0 bg-black/30', className)}
    {...props}
  />
)

const DialogContent = ({
  className,
  ...props
}: DialogPrimitive.DialogContentProps) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        'fixed top-1/2 left-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-200 bg-white p-6 shadow-lg',
        className
      )}
      {...props}
    />
  </DialogPrimitive.Portal>
)

export { Dialog, DialogTrigger, DialogClose, DialogContent }
