import { useState } from 'react'
import { Button, Card, Input } from '@/components/ui'
import { CATEGORY_DATA } from '@/data/Category'
import { MenuBar, TextEditor, useTextEditor } from '@/components/texteditor'
import CategorySelect from '@/components/category/CategorySelectGroup'

const QuestionCreate = () => {
  const [content, setContent] = useState('')

  const editor = useTextEditor({
    content: '',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
    },
  })
  const [mainCategory, setMainCategory] = useState<string>()
  const [middleCategory, setMiddleCategory] = useState<string>()
  const [subCategory, setSubCategory] = useState<string>()

  const mainOptions = CATEGORY_DATA
  const middleOptions = mainCategory
    ? (CATEGORY_DATA.find((c) => c.name === mainCategory)?.subCategories ?? [])
    : []
  const subOptions = middleCategory
    ? (middleOptions.find((c) => c.name === middleCategory)?.items ?? [])
    : []

  const handleMainChange = (value: string) => {
    setMainCategory(value)
    setMiddleCategory(undefined)
    setSubCategory(undefined)
  }

  const handleMiddleChange = (value: string) => {
    setMiddleCategory(value)
    setSubCategory(undefined)
  }

  return (
    <div className="flex w-full flex-col items-center py-10">
      <h1 className="mb-2 w-full max-w-[944px] text-2xl font-bold">
        질문 작성하기
      </h1>
      <div className="mb-6 h-[1px] w-full max-w-[944px] bg-[#CECECE]" />

      {/* 카테고리 영역 */}
      <Card className="flex w-full max-w-[944px] flex-col gap-4 rounded-[20px] border px-[38px] py-10">
        <div className="flex w-full gap-[12px]">
          {/* 대분류 */}
          <CategorySelect
            placeholder="대분류 선택"
            options={mainOptions}
            value={mainCategory}
            onChange={handleMainChange}
          />

          {/* 중분류 */}
          <CategorySelect
            placeholder="중분류 선택"
            options={middleOptions}
            value={middleCategory}
            onChange={handleMiddleChange}
            disabled={!mainCategory}
          />

          {/* 소분류 */}
          <CategorySelect
            placeholder="소분류 선택"
            options={subOptions}
            value={subCategory}
            onChange={setSubCategory}
            disabled={!middleCategory}
          />
        </div>

        <Input
          className="h-[60px] w-full rounded-[4px] border bg-[#F7F2FF] px-[16px] py-[10px]"
          placeholder="제목을 입력하세요"
        />
      </Card>

      {/* 에디터 */}
      <div className="mt-5 w-full max-w-[944px] rounded-[20px] bg-[#CECECE] p-[1px]">
        <div className="flex min-h-[677px] flex-col overflow-hidden rounded-[20px] bg-white">
          <div className="border-b border-[#CECECE] bg-white">
            <MenuBar editor={editor} />
          </div>

          <div className="flex flex-1">
            <div className="w-1/2 overflow-y-auto border-r border-[#CECECE] p-4">
              <TextEditor editor={editor} />
            </div>

            <div className="w-1/2 overflow-y-auto bg-gray-50 p-4">
              <div
                className="preview"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[32px] flex w-full max-w-[944px] justify-end">
        <Button>등록하기</Button>
      </div>
    </div>
  )
}

export default QuestionCreate
