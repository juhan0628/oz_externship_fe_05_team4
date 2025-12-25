import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/Select'

type Option = {
  id: string | number
  name: string
}

type CategorySelectProps = {
  placeholder: string
  options: Option[]
  value?: string
  onChange: (value: string) => void
  disabled?: boolean
}

const CategorySelect = ({
  placeholder,
  options,
  value,
  onChange,
  disabled,
}: CategorySelectProps) => {
  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.id} value={opt.name}>
            {opt.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default CategorySelect
