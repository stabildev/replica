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
    <div className={cn(`gradient-mask-b-70 relative h-52`, className)}>
      <div className="relative mx-auto mt-[110px] h-[500px] w-[1000px]">
        {animated && (
          <Image
            src="/circle-lights.png"
            width={87}
            height={68}
            alt=""
            className={cn(`animate-orbit absolute top-0 h-auto w-[1000px]`, {
              'animate-orbit-reverse': reversed,
              'animate-orbit': !reversed,
            })}
          />
        )}
        <div className="bg-background absolute mx-auto aspect-square w-full rounded-full" />
        <div className="from-border/[2%] to-border/0 border-border/5 absolute aspect-square w-full rounded-full border bg-gradient-to-b to-10%" />
      </div>
    </div>
  )
}
