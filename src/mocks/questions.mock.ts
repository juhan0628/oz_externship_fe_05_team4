import type { Question } from '@/types'
import profileImg from '@/assets/profile.png'
import thumnailImg from '@/assets/Rectangle.png'

export const QUESTIONS_MOCK: Question[] = [
  {
    id: 1,
    categories: ['프론트엔드', '프로그래밍 언어', 'Python'],
    title: '오류가 발생했다고 뜨네요.',
    preview:
      '실행 결과오류가 발생했어요. AI 코드리뷰로 왜 오류가 발생했는지 확인해 보세요...',
    answers: 2,
    views: 60,
    time: '1시간 전',
    thumbnail: null,
    author: {
      name: '김태산',
      profile: profileImg,
    },
  },
  {
    id: 2,
    categories: ['프론트엔드', '프로그래밍 언어', 'Python'],
    title: 'now 함수를 써야 하는 상황 예시에 대해서',
    preview:
      '각 row마다 시간 계산 처리를 다르게 해야 하는 경우라면 now 함수를 쓰는 게 좋을 것 같습니다...',
    answers: 0,
    views: 30,
    time: '1시간 전',
    thumbnail: thumnailImg,
    author: {
      name: 'jnubugo',
      profile: profileImg,
    },
  },
]
