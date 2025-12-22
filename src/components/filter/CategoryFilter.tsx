import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { CATEGORY_DATA } from '@/data'
import { cn } from '@/lib/utils'

export interface CategoryValue {
  main: string | null
  middle: string | null
  sub: string | null
}

interface Props {
  value: CategoryValue
  onChange: (v: CategoryValue) => void
}

export default function CategoryFilter({ value, onChange }: Props) {
  const mainOptions = CATEGORY_DATA
  const middleOptions = value.main
    ? (CATEGORY_DATA.find((c) => c.name === value.main)?.subCategories ?? [])
    : []
  const subOptions = value.middle
    ? (middleOptions.find((c) => c.name === value.middle)?.items ?? [])
    : []

  return (
    <div className="space-y-4">
      <Dropdown
        label="대분류 선택"
        value={value.main}
        options={mainOptions.map((c) => c.name)}
        onSelect={(v) => onChange({ main: v, middle: null, sub: null })}
      />

      <Dropdown
        label="중분류 선택"
        value={value.middle}
        options={middleOptions.map((c) => c.name)}
        disabled={!value.main}
        onSelect={(v) => onChange({ ...value, middle: v, sub: null })}
      />

      <Dropdown
        label="소분류 선택"
        value={value.sub}
        options={subOptions.map((c) => c.name)}
        disabled={!value.middle}
        onSelect={(v) => onChange({ ...value, sub: v })}
      />
    </div>
  )
}

interface DropdownProps {
  label: string
  value: string | null
  options: string[]
  disabled?: boolean
  onSelect: (v: string) => void
}

function Dropdown({
  label,
  value,
  options,
  disabled,
  onSelect,
}: DropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        'border',
        open ? 'border-primary' : 'border-gray-200',
        disabled && 'bg-gray-250 border-gray-200',
        'rounded-md'
      )}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          if (disabled) return
          setOpen((p) => !p)
        }}
        className={cn(
          'flex h-12 w-full items-center justify-between px-4 text-sm',
          open ? 'rounded-t-md' : 'rounded-md',
          disabled
            ? 'text-gray-disabled [&_svg]:text-gray-disabled cursor-not-allowed'
            : 'text-gray-primary bg-white'
        )}
      >
        <span className={cn(!value && 'text-gray-400')}>{value ?? label}</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {open && (
        <ul className="max-h-56 overflow-auto rounded-b-md bg-white">
          {options.map((opt) => {
            const selected = value === opt
            return (
              <li
                key={opt}
                onClick={() => {
                  onSelect(opt)
                  setOpen(false)
                }}
                className={cn(
                  'flex h-10 cursor-pointer items-center justify-between px-4 text-sm',
                  'hover:bg-primary-50',
                  selected && 'bg-primary-50 text-primary font-medium'
                )}
              >
                {opt}
                {selected && <Check className="text-primary h-4 w-4" />}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
