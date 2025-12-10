import {
  Select as ShadSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

interface Option {
  label: string
  value: string
}

interface Props {
  options?: Option[]
  placeholder?: string
  value?: string
  onChange?: (val: string) => void
  className?: string
  children?: React.ReactNode
}

export default function Select({
  options,
  placeholder,
  value,
  onChange,
  className,
}: Props) {
  return (
    <ShadSelect value={value} onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options?.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadSelect>
  )
}
