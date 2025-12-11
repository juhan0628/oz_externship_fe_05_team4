import './App.css'
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Skeleton,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from './components/common'

function App() {
  return (
    <div className="min-h-screen space-y-6 bg-white p-8">
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
  )
}

export default App
