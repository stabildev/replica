'use client'

import { FloatingNav } from '@/components/FloatingNav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)

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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 0) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
    }
    scrollListener()
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <div className="fixed top-0 z-20 flex h-20 w-full flex-col items-stretch px-6">
      <div
        className={cn(
          'bg-border/[1%] flex h-full w-full items-center justify-center backdrop-blur-md transition-opacity delay-700 duration-500',
          collapsed && 'opacity-0'
        )}
      >
        {/* Logo */}
        <nav className="container flex max-w-[1330px] justify-between">
          <Link className="flex items-center gap-3" href="/">
            <div className="via-grad-pink flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 from-10% to-yellow-200 to-90% text-2xl font-medium text-white">
              D
            </div>
            <h3 className="font-display font-medium text-white">Dimension</h3>
          </Link>

          <div className="hover:bg-border/[3%] relative my-auto rounded-lg transition-colors delay-700 duration-500">
            <div className="border-border button-border pointer-events-none absolute inset-0 rounded-lg border" />
            <button className="from-border/0 to-border/10 h-9 rounded-lg bg-gradient-to-b px-4 text-sm">
              Join waitlist
            </button>
          </div>
        </nav>
      </div>

      <FloatingNav
        items={menuItems}
        collapsed={collapsed}
        className={cn(
          'absolute inset-0 mx-auto my-auto hidden transition-all delay-700 duration-500 sm:flex'
        )}
      />
      <div
        className={cn(
          'from-border/0 via-border/15 to-border/0 h-[1px] w-full bg-gradient-to-r transition-opacity delay-700 duration-500',
          collapsed && 'opacity-0'
        )}
      />
    </div>
  )
}
