import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Circle = ({
  diameter,
  className,
  animated = false,
  reversed = false,
}: {
  diameter: number
  className?: string
  animated?: boolean
  reversed?: boolean
}) => {
  const radius = diameter / 2
  const offset = 0.17 * diameter
  const imageAspectRatio = 87 / 68
  return (
    <div
      className={cn(`mask-gradient relative`, className)}
      style={{
        height: `${radius + offset}px`,
        width: `${diameter + 2 * offset}px`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          marginLeft: `${offset}px`,
          marginRight: `${offset}px`,
          marginTop: `${offset}px`,
          height: `${radius}px`,
          width: `${diameter}px`,
        }}
      >
        {animated && (
          <Image
            src="/circle-lights.png"
            width={diameter}
            height={diameter / imageAspectRatio}
            alt=""
            className={cn(`absolute top-0 aspect-square`, {
              'animate-orbit-reverse': reversed,
              'animate-orbit': !reversed,
            })}
          />
        )}
        <div className="bg-background absolute aspect-square w-full rounded-full" />
        <div className="from-border/10 to-border/0 border-border/10 absolute aspect-square w-full rounded-full border bg-gradient-to-b to-25%" />
      </div>
    </div>
  )
}
