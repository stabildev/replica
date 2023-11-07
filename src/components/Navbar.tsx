'use client'

import { FloatingNav } from '@/components/FloatingNav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    {
      name: 'About us',
    },
    {
      name: 'Blog',
    },
    {
      name: 'Careers',
      count: 5,
    },
    {
      name: 'News',
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
          'flex h-full w-full items-center justify-center bg-border/[1%] backdrop-blur-md transition-opacity delay-700 duration-500',
          collapsed && 'opacity-0'
        )}
      >
        {/* Logo */}
        <nav className="container flex max-w-[1330px] justify-between">
          <Link className="flex items-center gap-3" href="/">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-grad-purple from-10% via-grad-pink to-grad-orange to-90% text-2xl font-semibold text-white">
              R
            </div>
            <h3 className="font-display font-medium text-white">Replica</h3>
          </Link>

          <div className="relative my-auto rounded-lg transition-colors delay-700 duration-500 hover:bg-border/[3%]">
            <div className="button-border pointer-events-none absolute inset-0 rounded-lg border border-border" />
            <button className="h-9 rounded-lg bg-gradient-to-b from-border/0 to-border/10 px-4 text-sm">
              Join now
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
          'h-[1px] w-full bg-gradient-to-r from-border/0 via-border/15 to-border/0 transition-opacity delay-700 duration-500',
          collapsed && 'opacity-0'
        )}
      />
    </div>
  )
}
