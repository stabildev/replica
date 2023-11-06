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
        'border-border/10 relative flex h-12 w-fit items-center overflow-clip rounded-full border p-1 transition delay-700 duration-500',
        collapsed && 'backdrop-blur-sm',
        className
      )}
    >
      <div
        className={cn(
          'bg-background/50 absolute inset-0 -z-10 transition delay-700 duration-500',
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
        className="bg-border/[3%] border-border/10 pointer-events-none absolute block h-10 rounded-full border transition-all duration-300"
        style={underlineStyles}
      />
      <ul ref={navRef} className="flex items-center text-sm opacity-100">
        {items.map((item, index) => (
          <NavLink index={index} key={index}>
            {item.name}
            {item.count && (
              <div className="bg-border/5 ml-1 flex h-5 w-5 items-center justify-center rounded-full text-center text-xs">
                {item.count}
              </div>
            )}
          </NavLink>
        ))}
        {collapsed && (
          <li
            className={cn(
              'from-grad-purple via-grad-pink to-grad-orange relative ml-3 flex h-8 cursor-pointer items-center rounded-full bg-gradient-to-r from-10% via-40% px-3 font-medium text-white',
              "before:text-border/20 before:absolute before:-left-4 before:content-['|']"
            )}
          >
            Join waitlist
          </li>
        )}
      </ul>
    </nav>
  )
}
