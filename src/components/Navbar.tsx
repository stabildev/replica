'use client'

import Link from 'next/link'
import { ReactNode, useEffect, useRef, useState } from 'react'

export const Navbar = () => {
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
        className="flex h-10 cursor-pointer items-center px-5"
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
          transition: 'opacity 0.3s ease-in-out',
        }),
      }
    }
    const currentStyle = hoverRef.current?.style
    return {
      width: currentStyle?.width,
      transform: currentStyle?.transform,
      opacity: '0',
    }
  }

  const menuItems = [
    {
      name: 'About',
    },
    {
      name: 'Careers',
      count: 3,
    },
    {
      name: 'Blog',
    },
    {
      name: 'Changelog',
    },
  ]

  const underlineStyles = getUnderlineStyles()

  return (
    <div className="fixed top-0 z-20 flex w-full flex-col items-stretch">
      <div className="bg-border/[1%] flex h-20 w-full items-center justify-center backdrop-blur-md">
        <nav className="container grid max-w-[1330px] grid-cols-3">
          <Link className="flex items-center gap-3" href="/">
            <div className="via-grad-pink flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 from-10% to-yellow-200 to-90% text-2xl font-medium text-white">
              D
            </div>
            <h3 className="font-display font-medium text-white">Dimension</h3>
          </Link>
          <div className="border-border/10 relative flex h-12 items-center place-self-center rounded-full border p-1 opacity-80">
            <div
              ref={hoverRef}
              className="bg-border/5 border-border/15 pointer-events-none absolute block h-10 rounded-full border transition-all duration-300"
              style={underlineStyles}
            ></div>
            <ul ref={navRef} className="flex items-center text-sm">
              {menuItems.map((item, index) => (
                <NavLink index={index} key={index}>
                  {item.name}
                  {item.count && (
                    <div className="bg-border/5 ml-1 flex h-5 w-5 items-center justify-center rounded-full text-center text-xs">
                      {item.count}
                    </div>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="border-border/15 from-border/15 via-border/5 to-border/0 my-auto h-9 place-self-end overflow-clip rounded-lg border bg-gradient-to-t">
            <button className="hover:bg-border/5 h-full w-full px-4 text-sm transition duration-500">
              Join waitlist
            </button>
          </div>
        </nav>
      </div>
      <div className="from-border/0 via-border/15 to-border/0 h-[1px] w-full bg-gradient-to-r" />
    </div>
  )
}
