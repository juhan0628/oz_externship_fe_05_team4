import { useState } from 'react'
import { Button, Card, Input } from '@/components/ui'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/Select'
import { CATEGORY_DATA } from '@/data/Category'
import StarterKit from '@tiptap/starter-kit'
import { useEditor } from '@tiptap/react'
import { MenuBar } from '@/components/texteditor'

const QuestionCreate = () => {
  const [mainCategory, setMainCategory] = useState<string>()
  const [middleCategory, setMiddleCategory] = useState<string>()
  const [subCategory, setSubCategory] = useState<string>()
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  })

  const mainOptions = CATEGORY_DATA

  const middleOptions = mainCategory
    ? (CATEGORY_DATA.find((c) => c.name === mainCategory)?.subCategories ?? [])
    : []

  const subOptions = middleCategory
    ? (middleOptions.find((c) => c.name === middleCategory)?.items ?? [])
    : []

  return (
    <div className="flex w-full flex-col items-center py-10">
      <h1 className="mb-2 w-full max-w-[944px] text-2xl font-bold">
        질문 작성하기
      </h1>
      <div className="mb-6 h-[1px] w-full max-w-[944px] bg-[#CECECE]" />

      <Card className="flex w-full max-w-[944px] flex-col gap-4 rounded-[20px] border px-[38px] py-10">
        <div className="flex w-full gap-[12px]">
          {/* 대분류 */}
          <Select onValueChange={setMainCategory}>
            <SelectTrigger>
              <SelectValue placeholder="대분류 선택" />
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
          <Select disabled={!mainCategory} onValueChange={setMiddleCategory}>
            <SelectTrigger>
              <SelectValue placeholder="중분류 선택" />
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
            value={subCategory}
            onValueChange={setSubCategory}
            disabled={!middleCategory}
          >
            <SelectTrigger>
              <SelectValue placeholder="소분류 선택" />
            </SelectTrigger>
            <SelectContent>
              {subOptions.map((item) => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Input
          className="h-[60px] w-full rounded-[4px] border bg-[#F7F2FF] px-[16px] py-[10px]"
          placeholder="제목을 입력하세요"
        />
      </Card>

      <Card className="mt-5 flex min-h-[677px] w-full max-w-[944px] flex-col rounded-[20px]">
        <Card className="h-[80px] border-b">
          <MenuBar editor={editor} />
        </Card>
      </Card>

      <div className="mt-[32px] flex w-full max-w-[944px] justify-end">
        <Button>등록하기</Button>
      </div>
    </div>
  )
}

export default QuestionCreate
