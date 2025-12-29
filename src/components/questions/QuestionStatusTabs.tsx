import { cn } from '@/lib/utils'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'

export type QuestionTabValue = 'all' | 'answered' | 'waiting'

interface Props {
  value: QuestionTabValue
  onChange: (v: QuestionTabValue) => void
  className?: string
}

export default function QuestionStatusTabs({
  value,
  onChange,
  className,
}: Props) {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as QuestionTabValue)}>
      <TabsList
        className={cn(
          'h-auto w-full justify-start gap-10 rounded-none bg-transparent p-0',
          className
        )}
      >
        <TabItem value="all">전체보기</TabItem>
        <TabItem value="answered">답변완료</TabItem>
        <TabItem value="waiting">답변 대기중</TabItem>
      </TabsList>
    </Tabs>
  )
}

function TabItem({
  value,
  children,
}: {
  value: QuestionTabValue
  children: React.ReactNode
}) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        'relative h-auto rounded-none bg-transparent px-0 pt-0 pb-4 text-sm font-medium text-gray-500 shadow-none',
        'hover:text-gray-900',
        'data-[state=active]:text-primary data-[state=active]:shadow-none',
        'data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0',
        'data-[state=active]:after:bg-primary data-[state=active]:after:h-[2px] data-[state=active]:after:w-full'
      )}
    >
      {children}
    </TabsTrigger>
  )
}
