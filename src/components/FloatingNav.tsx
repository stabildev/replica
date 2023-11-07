'use client'
import { cn } from '@/lib/utils'
import React, { Children, ReactNode, useRef, useState } from 'react'

export const FloatingNav = ({
  className,
  items,
  collapsed = false,
}: {
  className?: string
  items: { name: string; count?: number }[]
  collapsed?: boolean
}) => {
  const navRef = useRef<HTMLUListElement>(null)
  const hoverRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const NavLink = ({
    index,
    children,
  }: {
    index: number
    children: ReactNode
  }) => {
    return (
      <li
        className="flex h-10 cursor-pointer items-center px-5 opacity-80"
        onMouseEnter={(e) => {
          setHoveredIndex(index)
        }}
        onMouseLeave={() => {
          return setHoveredIndex(null)
        }}
      >
        {children}
      </li>
    )
  }

  // Function to calculate the width and left offset of the hovered item
  const getUnderlineStyles = () => {
    if (hoveredIndex !== null && navRef.current) {
      const hoveredItem = navRef.current.children[hoveredIndex]
      const { width, left } = hoveredItem.getBoundingClientRect()
      const navLeft = navRef.current.getBoundingClientRect().left
      const currentStyle = hoverRef.current?.style
      return {
        width: `${width}px`,
        transform: `translateX(${left - navLeft}px)`,
        opacity: '1',
        ...(currentStyle?.opacity === '0' && {
          transition: 'opacity 0.4s ease-in-out',
        }),
      }
    }
    const currentStyle = hoverRef.current?.style
    return {
      width: currentStyle?.width,
      transform: currentStyle?.transform,
      opacity: '0',
      transition: 'opacity 0.5s ease-in-out',
    }
  }

  const underlineStyles = getUnderlineStyles()

  return (
    <nav
      className={cn(
        'relative flex h-12 w-fit items-center overflow-clip rounded-full border border-border/10 p-1 transition delay-700 duration-500',
        collapsed && 'backdrop-blur-sm',
        className
      )}
    >
      {/* Background */}
      <div
        className={cn(
          'absolute inset-0 -z-10 bg-background/50 transition delay-700 duration-500',
          collapsed ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div
        className={cn(
          'radial-blur-bg absolute inset-0 -z-10 transition delay-700 duration-500',
          collapsed ? 'opacity-100' : 'opacity-0'
        )}
      />

      <div
        ref={hoverRef}
        className="pointer-events-none absolute block h-10 rounded-full border border-border/10 bg-border/[3%] transition-all duration-300"
        style={underlineStyles}
      />
      <ul ref={navRef} className="flex items-center text-sm opacity-100">
        {/* Menu links */}
        {items.map((item, index) => (
          <NavLink index={index} key={index}>
            {item.name}
            {item.count && (
              <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-border/5 text-center text-xs">
                {item.count}
              </div>
            )}
          </NavLink>
        ))}

        {/* Separator */}
        <li className="relative -left-1 -top-2">
          <div
            className={cn(
              'tansition-opacity absolute text-border/20 delay-700 duration-500',
              collapsed ? 'opacity-1' : 'opacity-0'
            )}
          >
            |
          </div>
        </li>

        {/* CTA Button */}
        <li
          className={cn(
            'relative flex h-8 cursor-pointer flex-row items-center overflow-hidden rounded-full bg-gradient-to-r from-grad-purple from-10% via-grad-pink via-40% to-grad-orange text-center font-medium text-white',
            'transition-all delay-700 duration-500',
            collapsed ? 'ml-3 mr-1 w-28' : 'w-0'
          )}
        >
          <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-medium">
            Join now
          </span>
        </li>
      </ul>
    </nav>
  )
}
