import { SelectTrigger, Skeleton } from '@/components/common'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import Textarea from '@/components/common/Textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@radix-ui/react-select'
import { Link } from 'react-router'

export default function MainPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-[960px] px-6 py-8">
        <h1 className="mb-6 text-2xl font-bold text-[#121212]">질문응답</h1>
      </main>
      <div className="min-h-screen space-y-6 bg-white p-8">
        <section className="mb-10 border-b pb-10">
          <h2 className="mb-4 text-xl font-bold">팀원 작업 공간</h2>
          <div className="flex gap-3">
            <Link to="/Question/Detail/1">
              <Button variant="outline">Detail Page</Button>
            </Link>

            <Link to="/Question/Create">
              <Button variant="outline">Create Page</Button>
            </Link>

            <Link to="/Question/Edit/1">
              <Button variant="outline">Edit Page</Button>
            </Link>
          </div>
        </section>

        <div className="flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
        </div>

        <Input placeholder="입력해보세요" />

        <Textarea placeholder="내용을 입력하세요" />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="선택하세요" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="1">옵션 1</SelectItem>
            <SelectItem value="2">옵션 2</SelectItem>
          </SelectContent>
        </Select>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>oz</AvatarFallback>
            </Avatar>
            <span className="text-sm text-[#5C5B5E]">Avatar</span>
          </div>
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </>
  )
}
;<section className="mb-6 flex items-center justify-between gap-4">
  <div className="relative flex-1">
    <input
      type="text"
      placeholder="질문 검색"
      className="h-10 w-full rounded-full border border-[#ECECEC] bg-[#FAFAFA] px-10 text-sm outline-none focus:border-[#6201E0]"
    />
    <span className="absolute top-1/2 left-4 -translate-y-1/2 text-xs text-[#9D9D9D]">
      🔍
    </span>
  </div>

  <button className="h-10 rounded-full bg-[#6201E0] px-5 text-sm font-semibold text-white hover:bg-[#721AE3]">
    질문 등록하기
  </button>
</section>
