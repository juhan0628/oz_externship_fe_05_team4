import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-600 active:bg-primary-700',
        default:
          'bg-gray-100 text-gray-primary border border-gray-200 hover:bg-gray-200',
        outline: 'border border-primary text-primary hover:bg-primary-100',
        secondary:
          'bg-gray-400 text-white hover:bg-gray-500 active:bg-gray-600',
        ghost: 'text-primary hover:bg-primary-100',
        success: 'bg-success text-white hover:bg-green-600',
        disabled: 'bg-gray-disabled text-gray-500 cursor-not-allowed',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3',
        lg: 'h-10 px-6',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
