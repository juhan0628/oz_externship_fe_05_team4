interface QuestionCardProps {
  id: number
  categories: string[]
  title: string
  preview: string
  answers: number
  views: number
  time: string
  thumbnail?: string | null
  author: {
    name: string
    profile: string
  }
}

export default function QuestionCard({
  categories,
  title,
  preview,
  answers,
  views,
  time,
  thumbnail,
  author,
}: QuestionCardProps) {
  return (
    <article className="flex w-full cursor-pointer justify-between border-b border-gray-200 py-6">
      <div className="flex-1 pr-6">
        <div className="mb-2 flex items-center gap-1 text-xs text-gray-500">
          {categories.map((c, i) => (
            <span
              key={i}
              className={
                i === categories.length - 1 ? 'text-blue-600 underline' : ''
              }
            >
              {c}
              {i < categories.length - 1 && (
                <span className="mx-1 text-gray-400">›</span>
              )}
            </span>
          ))}
        </div>

        <h2 className="mb-2 text-base leading-snug font-semibold text-gray-900">
          {title}
        </h2>

        <p className="line-clamp-2 text-sm leading-snug text-gray-600">
          {preview}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-green-600">A</span>
            <span>답변 {answers}</span>
          </div>

          <span>조회수 {views}</span>

          <div className="ml-auto flex items-center gap-1">
            <img
              src={author.profile}
              className="h-5 w-5 rounded-full object-cover"
            />
            <span>{author.name}</span>
            <span className="text-gray-400">{time}</span>
          </div>
        </div>
      </div>

      {thumbnail && (
        <div className="h-[80px] w-[120px] flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
          <img src={thumbnail} className="h-full w-full object-cover" />
        </div>
      )}
    </article>
  )
}
