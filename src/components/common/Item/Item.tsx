import { Avatar } from '@radix-ui/react-avatar'
export default function JaeminCard() {
  return (
    <div className="flex space-x-3 border-gray-50 py-4">
      <Avatar className="h-10 w-10 shrink-0 rounded-full bg-purple-200" />

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900">iron</span>
          <span className="text-sm text-gray-400">2025년 6월 13일</span>
        </div>

        <div className="mt-1.5 text-[15px] text-gray-800">감사합니다!</div>
      </div>
    </div>
  )
}
