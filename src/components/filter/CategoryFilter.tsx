import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui'
import { CATEGORY_DATA } from '@/data'

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
      {/* 대분류 */}
      <Select
        value={value.main ?? ''}
        onValueChange={(v) => onChange({ main: v, middle: null, sub: null })}
      >
        <SelectTrigger>
          <SelectValue placeholder="대분류" />
        </SelectTrigger>
        <SelectContent>
          {mainOptions.map((c) => (
            <SelectItem key={c.id} value={c.name}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* 중분류 */}
      <Select
        value={value.middle ?? ''}
        disabled={!value.main}
        onValueChange={(v) => onChange({ ...value, middle: v, sub: null })}
      >
        <SelectTrigger>
          <SelectValue placeholder="중분류" />
        </SelectTrigger>
        <SelectContent>
          {middleOptions.map((c) => (
            <SelectItem key={c.id} value={c.name}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* 소분류 */}
      <Select
        value={value.sub ?? ''}
        disabled={!value.middle}
        onValueChange={(v) => onChange({ ...value, sub: v })}
      >
        <SelectTrigger>
          <SelectValue placeholder="소분류" />
        </SelectTrigger>
        <SelectContent>
          {subOptions.map((c) => (
            <SelectItem key={c.id} value={c.name}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
