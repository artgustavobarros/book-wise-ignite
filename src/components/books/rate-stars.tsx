import { Star } from '@phosphor-icons/react/dist/ssr/Star'

interface RateStartProps {
  rate: number
}

export function RateStars({ rate }: RateStartProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        if (rate > i) {
          return (
            <Star key={i} className="h-4 w-4 text-purple-100" weight="fill" />
          )
        } else {
          return <Star key={i} className="h-4 w-4 text-purple-100" />
        }
      })}
    </div>
  )
}
