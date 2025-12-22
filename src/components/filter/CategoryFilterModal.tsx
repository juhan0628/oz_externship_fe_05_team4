import { useState } from 'react'
import type { CategoryValue } from '@/components/filter'
import CategoryFilter from '@/components/filter/CategoryFilter'

interface Props {
  value: CategoryValue
  onApply: (v: CategoryValue) => void
  onClose: () => void
}

export default function CategoryFilterModal({
  value,
  onApply,
  onClose,
}: Props) {
  const [localValue, setLocalValue] = useState<CategoryValue>(value)

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />

      <div className="fixed top-[180px] right-[calc(50%-600px)] z-50 w-[420px] rounded-lg bg-white p-6 shadow-lg">
        <header className="mb-4 text-lg font-bold">필터</header>

        <CategoryFilter value={localValue} onChange={setLocalValue} />

        <footer className="mt-6 flex justify-end gap-2">
          <button
            className="rounded-md border px-4 py-2 text-sm"
            onClick={() =>
              setLocalValue({ main: null, middle: null, sub: null })
            }
          >
            초기화
          </button>

          <button
            className="bg-primary rounded-md px-4 py-2 text-sm text-white"
            onClick={() => {
              onApply(localValue)
              onClose()
            }}
          >
            적용하기
          </button>
        </footer>
      </div>
    </>
  )
}
