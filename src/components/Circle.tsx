import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Circle = ({
  className,
  animated = false,
  reversed = false,
}: {
  className?: string
  animated?: boolean
  reversed?: boolean
}) => {
  return (
    <div className={cn(`relative h-52 gradient-mask-b-70`, className)}>
      <div className="relative mx-auto mt-[110px] h-[500px] w-[1000px]">
        {animated && (
          <Image
            src="/ambilight.png"
            width={87}
            height={68}
            alt=""
            className={cn(`absolute top-0 h-auto w-[1000px] animate-orbit`, {
              'animate-orbit-reverse': reversed,
              'animate-orbit': !reversed,
            })}
          />
        )}
        <div className="absolute mx-auto aspect-square w-full rounded-full bg-background" />
        <div className="absolute aspect-square w-full rounded-full border border-border/5 bg-gradient-to-b from-border/[2%] to-border/0 to-10%" />
      </div>
    </div>
  )
}
