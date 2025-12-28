import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type QuestionTabValue = 'all' | 'answered' | 'waiting'

interface Props {
  value: QuestionTabValue
  onChange: (v: QuestionTabValue) => void
}

export default function QuestionStatusTabs({ value, onChange }: Props) {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as QuestionTabValue)}>
      <TabsList className="h-auto gap-10 rounded-none bg-transparent p-0">
        <TabsTrigger
          value="all"
          className="data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 data-[state=active]:shadow-none"
        >
          전체보기
        </TabsTrigger>

        <TabsTrigger
          value="answered"
          className="data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 data-[state=active]:shadow-none"
        >
          답변완료
        </TabsTrigger>

        <TabsTrigger
          value="waiting"
          className="data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent pb-4 text-sm font-medium text-gray-500 data-[state=active]:shadow-none"
        >
          답변 대기중
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
