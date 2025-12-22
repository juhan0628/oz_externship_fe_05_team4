import {
  Dialog,
  DialogContent,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui'
import { CATEGORY_DATA } from '@/data'

interface Props {
  open: boolean
  onClose: () => void
  mainCategory: string | null
  middleCategory: string | null
  subCategory: string | null
  setMainCategory: (v: string | null) => void
  setMiddleCategory: (v: string | null) => void
  setSubCategory: (v: string | null) => void
}

export default function FilterDrawer({
  open,
  onClose,
  mainCategory,
  middleCategory,
  subCategory,
  setMainCategory,
  setMiddleCategory,
  setSubCategory,
}: Props) {
  const mainOptions = CATEGORY_DATA

  const middleOptions = mainCategory
    ? (CATEGORY_DATA.find((c) => c.name === mainCategory)?.subCategories ?? [])
    : []

  const subOptions = middleCategory
    ? (middleOptions.find((c) => c.name === middleCategory)?.items ?? [])
    : []

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="fixed top-0 right-0 h-screen w-[360px] rounded-none p-6">
        <h2 className="mb-6 text-lg font-bold">필터</h2>

        {/* 대분류 */}
        <Select
          value={mainCategory ?? ''}
          onValueChange={(v) => {
            setMainCategory(v)
            setMiddleCategory(null)
            setSubCategory(null)
          }}
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
          value={middleCategory ?? ''}
          disabled={!mainCategory}
          onValueChange={(v) => {
            setMiddleCategory(v)
            setSubCategory(null)
          }}
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
          value={subCategory ?? ''}
          disabled={!middleCategory}
          onValueChange={setSubCategory}
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

        {/* 버튼 */}
        <div className="mt-auto flex justify-between">
          <button
            onClick={() => {
              setMainCategory(null)
              setMiddleCategory(null)
              setSubCategory(null)
            }}
          >
            선택 초기화
          </button>

          <button onClick={onClose}>필터 적용하기</button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
